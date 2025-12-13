import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.hint}>UPI tracker</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.scanButton}
        onPress={() => navigation.navigate('UPIScan')}
      >
        <Text style={styles.scanText}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3c3cff',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },

  content: {
    alignItems: 'center',
    marginTop: 140,
  },

  hint: {
    fontSize: 16,
    color: '#bdbdbd',
  },

  scanButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#7b4dff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  scanText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
