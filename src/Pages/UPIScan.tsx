import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

import UPIHandler from '../Utils/UPIHandler';

function UPIScan() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const upiScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (!scanned && codes.length > 0) {
        setScanned(true);

        const value = codes[0]?.value ?? 'Unknown';

        UPIHandler(value);
        setTimeout(() => setScanned(false), 2000);
      }
    },
  });

  if (device == null) return <Text>No device</Text>;
  if (!hasPermission) return <Text>Waiting for camera permission</Text>;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive
      codeScanner={upiScanner}
    />
  );
}

export default UPIScan;
