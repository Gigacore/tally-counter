import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class TallyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      modalVisibility: false,
    };

    this.saveCount = this.saveCount.bind(this);
    this.showCount = this.showCount.bind(this);
  }

  saveCount = async () => {
    try {
        await AsyncStorage.setItem('@CountValue:key', 'test');
    } catch {
        Alert.alert('Something went wrong');
    }
  };

  showCount = async () => {
    try {
        const value = await AsyncStorage.getItem('@CountValue:key')
        if(value !== null) {
          Alert.alert(value)
        }
      } catch(e) {
        // error reading value
      }
  }

  render() {
    const {count} = this.props;

    return (
      <>
        <View style={styles.container}>
          <Text>{count}</Text>
          <Text>Description</Text>
          <TextInput style={styles.inputField} />
          <TouchableOpacity
            onPress={() => this.saveCount()}
            activeOpacity={1}
            style={styles.control}>
            <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.showCount()}
            activeOpacity={1}
            style={styles.control}>
            <Text>Show Count</Text>
        </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#3f51b5',
  },
  inputField: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: 300,
    color: "#000",
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
