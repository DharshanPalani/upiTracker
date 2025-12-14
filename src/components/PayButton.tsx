import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AmountPageStyle as styles } from '../styles/AmountPageStyle';

const PayButton = ({
  amount,
  disabled,
  onPress,
}: {
  amount: string;
  disabled: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.85}
    disabled={disabled}
    onPress={onPress}
    style={[styles.payButton, disabled && styles.payButtonDisabled]}
  >
    <Text style={styles.payText}>Pay ₹{amount || '0'}</Text>
  </TouchableOpacity>
);

export default PayButton;
