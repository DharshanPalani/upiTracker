import { Linking } from 'react-native';

const UPIHandler = async (upi_url: string) => {
  if (!upi_url.startsWith('upi://')) return;
  const supported = await Linking.canOpenURL(upi_url);
  if (supported) {
    Linking.openURL(upi_url);
  }
};

export default UPIHandler;
