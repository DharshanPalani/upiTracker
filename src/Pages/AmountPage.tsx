import React, { useState, useCallback } from 'react';
import { Alert, Linking, View } from 'react-native';
import { AmountPageStyle as styles } from '../styles/AmountPageStyle';
import PayeeInfo from '../components/PayeeInfo';
import AmountInput from '../components/AmountInput';
import PayButton from '../components/PayButton';
import { getPayeeName } from '../Utils/upi';

const AmountPage = ({ route }: any) => {
  const { upi_url } = route.params;
  const [amount, setAmount] = useState('');

  const payeeName = getPayeeName(upi_url);
  const isValidAmount = Number(amount) > 0;

  const handlePay = useCallback(async () => {
    if (!isValidAmount) return;

    const finalUpiUrl = upi_url.includes('?')
      ? `${upi_url}&am=${amount}`
      : `${upi_url}?am=${amount}`;

    try {
      const supported = await Linking.canOpenURL(finalUpiUrl);
      if (!supported) return Alert.alert('UPI apps not found.');
      await Linking.openURL(finalUpiUrl);
    } catch {
      Alert.alert('Failed to open the UPI app');
    }
  }, [upi_url, amount, isValidAmount]);

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        {payeeName && <PayeeInfo payeeName={payeeName} />}
        <AmountInput amount={amount} setAmount={setAmount} />
      </View>

      <PayButton
        amount={amount}
        disabled={!isValidAmount}
        onPress={handlePay}
      />
    </View>
  );
};

export default AmountPage;
