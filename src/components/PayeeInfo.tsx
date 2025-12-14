import React from 'react';
import { View, Text } from 'react-native';
import { AmountPageStyle as styles } from '../styles/AmountPageStyle';

const PayeeInfo = ({ payeeName }: { payeeName: string }) => (
  <View style={styles.payeeContainer}>
    <Text style={styles.payeeLabel}>Paying</Text>
    <Text style={styles.payeeName}>{payeeName}</Text>
  </View>
);

export default PayeeInfo;
