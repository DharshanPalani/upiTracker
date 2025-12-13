import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click to scan</Text>
      <Button title="Scan" onPress={() => navigation.navigate('UPIScan')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303a3eff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: '#fafafaff',
  },
});

export default Home;
