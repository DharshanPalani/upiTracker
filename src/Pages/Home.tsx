import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HomeStyle } from '../styles/HomeStyle';

const Home = () => {
  const navigation = useNavigation<any>();

  const styles = HomeStyle;

  const recentTx = [
    { id: '1', amount: '₹120', type: 'UPI Payment' },
    { id: '2', amount: '₹45', type: 'Mobile Pay' },
    { id: '3', amount: '₹560', type: 'UPI Payment' },
    { id: '4', amount: '₹560', type: 'UPI Payment' },
    { id: '5', amount: '₹560', type: 'UPI Payment' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>UPI Tracker</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settings}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => navigation.navigate('MobilePay')}
        >
          <Text style={styles.sideText}>Mobile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => navigation.navigate('UPIScan')}
        >
          <Text style={styles.scanText}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => navigation.navigate('TransactionHistory')}
        >
          <Text style={styles.sideText}>History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recent}>
        <Text style={styles.recentTitle}>Recent Transactions</Text>

        <FlatList
          data={recentTx}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.txItem}>
              <Text style={styles.txAmount}>{item.amount}</Text>
              <Text style={styles.txSub}>{item.type}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
