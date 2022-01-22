import React, {useState} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Switch,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Settings = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [text, onChangeText] = React.useState('120');
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.topic}>Pump Status: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.topic}>Manual Override: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
          style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.topic}>Tank Height [cm]: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.topic}>Refill Limit: </Text>
        <Picker
          selectedValue={selectedValue}
          dropdownIconColor={'black'}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="10%" value="10" />
          <Picker.Item label="20%" value="20" />
          <Picker.Item label="30%" value="30" />
          <Picker.Item label="40%" value="40" />
          <Picker.Item label="50%" value="50" />
          <Picker.Item label="60%" value="60" />
          <Picker.Item label="70%" value="70" />
          <Picker.Item label="80%" value="80" />
        </Picker>
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
  input: {
    color: 'black',
    fontSize: 24,
    height: 50,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: 120,
    color: 'black',
    fontSize: 24,
  },
});

export default Settings;
