import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

const getPayeeName = (upiUrl: string): string | null => {
  try {
    const queryIndex = upiUrl.indexOf('?');
    if (queryIndex === -1) return null;

    const queryString = upiUrl.slice(queryIndex + 1);
    const pairs = queryString.split('&');

    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key === 'pn' && value) {
        return decodeURIComponent(value.replace(/\+/g, ' '));
      }
    }

    return null;
  } catch {
    return null;
  }
};

const AmountPage = ({ route }: any) => {
  const { upi_url } = route.params;
  const [amount, setAmount] = useState('');

  const payeeName = getPayeeName(upi_url);
  const isValidAmount = Number(amount) > 0;

  const handlePay = async () => {
    if (!isValidAmount) return;

    const finalUpiUrl = upi_url.includes('?')
      ? `${upi_url}&am=${amount}`
      : `${upi_url}?am=${amount}`;

    try {
      const supported = await Linking.canOpenURL(finalUpiUrl);

      if (!supported) {
        Alert.alert('No UPI app found');
        return;
      }

      await Linking.openURL(finalUpiUrl);
    } catch {
      Alert.alert('Failed to open UPI app');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        {payeeName && (
          <View style={styles.payeeContainer}>
            <Text style={styles.payeeLabel}>Paying</Text>
            <Text style={styles.payeeName}>{payeeName}</Text>
          </View>
        )}

        <Text style={styles.label}>Enter amount</Text>

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
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        disabled={!isValidAmount}
        onPress={handlePay}
        style={[styles.payButton, !isValidAmount && styles.payButtonDisabled]}
      >
        <Text style={styles.payText}>Pay ₹{amount || '0'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3c3cff',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },

  amountContainer: {
    alignItems: 'center',
    marginTop: 120,
  },

  payeeContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },

  payeeLabel: {
    color: '#9e9e9e',
    fontSize: 14,
    marginBottom: 4,
  },

  payeeName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },

  label: {
    color: '#bdbdbd',
    fontSize: 16,
    marginBottom: 20,
  },

  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rupee: {
    fontSize: 44,
    color: '#fff',
    fontWeight: '600',
    marginRight: 6,
  },

  input: {
    fontSize: 44,
    color: '#fff',
    fontWeight: '600',
    minWidth: 100,
    textAlign: 'center',
  },

  payButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#7b4dff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  payButtonDisabled: {
    backgroundColor: '#6b6b6b',
  },

  payText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
