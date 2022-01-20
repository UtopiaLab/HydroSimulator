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
        <View>
          <Text>HydroSimulator</Text>
        </View>
        <Dashboard />
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
