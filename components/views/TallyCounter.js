import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Modal,
} from 'react-native';
import SaveCount from './SaveCount';

export default class TallyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      modalVisibility: false,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.saveCount = this.saveCount.bind(this);
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
    Vibration.vibrate(100);
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
            }),
        },
      ],
      {cancelable: false},
    );
  };

  saveCount = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  render() {
    function Separator() {
      return <View style={styles.separator} />;
    }

    const { count } = this.state;

    return (
      <>
        <View style={styles.container}>
          <Modal
            visible={this.state.modalVisibility}
            onRequestClose={() => {
              this.setState({
                modalVisibility: false,
              });
            }}>
            <SaveCount count={count} />
          </Modal>
          <TouchableOpacity
            onPress={() => this.incrementCount()}
            activeOpacity={1}
            style={styles.meter}>
            <Text style={styles.counter}>{count}</Text>
            <Text style={styles.addition}>+</Text>
          </TouchableOpacity>
          <Separator />
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => this.resetCount()}
              activeOpacity={1}
              style={styles.control}>
              <Text>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.saveCount()}
              activeOpacity={1}
              style={styles.control}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',
};

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
    backgroundColor: '#f9f9f9',
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
    color: '#fff',
  },
  control: {
    height: 40,
    width: '50%',
    // display: 'flex',
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
