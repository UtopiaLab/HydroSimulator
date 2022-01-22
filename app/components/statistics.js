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

const Statistics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.topic}>pH Value: </Text>
        <Text style={styles.value}>7.2</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.topic}>TDS Value: </Text>
        <Text style={styles.value}>11.4</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.topic}>Temperature: </Text>
        <Text style={styles.value}>26.1 °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    marginTop: 20,
  },
  topic: {
    color: '#333333',
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    color: '#1166EE',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Statistics;
