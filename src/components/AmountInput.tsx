import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AmountPageStyle as styles } from '../styles/AmountPageStyle';

const AmountInput = ({
  amount,
  setAmount,
}: {
  amount: string;
  setAmount: (value: string) => void;
}) => (
  <View style={styles.amountRow}>
    <Text style={styles.rupee}>₹</Text>
    <TextInput
      value={amount}
      onChangeText={text => {
        if (/^\d*$/.test(text)) setAmount(text);
      }}
      placeholder="0"
      placeholderTextColor="#9e9e9e"
      keyboardType="numeric"
      autoFocus
      style={styles.input}
    />
  </View>
);

export default AmountInput;
