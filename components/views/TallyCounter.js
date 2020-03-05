import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, TouchableOpacity} from 'react-native';

export default class TallyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    const {count} = this.state;

    this.setState({
      count: count > 0 ? count - 1 : 0,
    });
  };

  resetCount = () => {
    Alert.alert(
      'Are you sure?',
      'This will reset count to zero.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            this.setState({
              count: 0,
        })},
      ],
      {cancelable: false},
    );
  };

  render() {
    function Separator() {
      return <View style={styles.separator} />;
    }

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.incrementCount()}
            style={styles.meter}>
            <Text style={styles.counter}>{this.state.count}</Text>
            <Text style={styles.addition}>+</Text>
          </TouchableOpacity>
          <Separator />
          {/* <TouchableOpacity
            onPress={() => this.decrementCount()}
            activeOpacity={1}
            style={styles.decrement}>
            <Text>&#8211;</Text>
          </TouchableOpacity> */}

          {/* <Image source={require('../../assets/reset.png')} /> */}
          {/* <Button
            style={styles.button}
            title="-"
            onPress={() => this.decrementCount()}
          />
          <Separator />
          <Button
            style={styles.button}
            title="Reset"
            onPress={() => this.resetCount()}
          /> */}

          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => this.resetCount()}
              activeOpacity={1}
              style={styles.control}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
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
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
    marginVertical: 8,
    color: '#000',
    opacity: 1,
  },
  button: {
    marginVertical: 12,
  },
  separator: {
    marginVertical: 8,
  },
  meter: {
    backgroundColor: '#f5f5f5',
    borderRadius: 300,
    width: 300,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    borderColor: '#2196F3',
    borderStyle: 'solid',
    // borderWidth: 1,
  },
  addition: {
    color: '#616161',
    fontSize: 30,
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 20,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  control: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
  },
  decrement: {
    fontSize: 14,
    borderColor: '#bdbdbd',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
