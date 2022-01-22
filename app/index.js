import React, {useState} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Images from './assets/images/img-config';
import Dashboard from './views/dashboard';
import LinearGradient from 'react-native-linear-gradient';

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.title}>HydroSimulator</Text>
        </View>
        <Dashboard />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#1166EE',
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
