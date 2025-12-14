import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, Linking } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

function UPIScan() {
  const navigation = useNavigation<any>();

  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [scannerActive, setScannerActive] = useState(true);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const handleUPI = async (upi_url: string) => {
    if (!upi_url.startsWith('upi://')) return;

    if (!upi_url.includes('am=')) {
      navigation.replace('AmountPage', { upi_url });
      return;
    }

    try {
      const supported = await Linking.canOpenURL(upi_url);
      if (!supported) {
        Alert.alert('No UPI app found');
        return;
      }

      await Linking.openURL(upi_url);
    } catch (err) {
      Alert.alert('Failed to open UPI app');
    }
  };

  const upiScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (!scanned && codes.length > 0) {
        setScanned(true);
        setScannerActive(false);
        const value = codes[0]?.value ?? 'Unknown';

        await handleUPI(value);

        setTimeout(() => {
          setScanned(false);
          setScannerActive(true);
        }, 2000);
      }
    },
  });

  if (device == null) return <Text>No camera device found</Text>;
  if (!hasPermission) return <Text>Waiting for camera permission...</Text>;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={scannerActive}
      codeScanner={upiScanner}
    />
  );
}

export default UPIScan;
