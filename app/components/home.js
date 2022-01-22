import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Current Water Level:</Text>
      <View style={styles.waterLevel}>
        <Text style={styles.count}>89.2</Text>
        <Text style={styles.sign}>%</Text>
      </View>
      <Text style={styles.title}>Water Flow:</Text>
      <Text style={styles.flow}>Active</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#333333',
    fontSize: 24,
    margin: 10,
    paddingTop: 20,
    paddingBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  waterLevel: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#1166EE',
    fontSize: 96,
    textAlign: 'center',
    justifyContent: 'center',
  },
  sign: {
    color: '#1166EE',
    fontSize: 36,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  flow: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
