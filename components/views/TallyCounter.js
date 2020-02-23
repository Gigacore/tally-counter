import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

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
    this.setState({
      count: 0,
    });
  };

  render() {
    function Separator() {
      return <View style={styles.separator} />;
    }

    return (
      <>
        <View>
          <Text style={styles.counter}>{this.state.count}</Text>
          <Button
            style={styles.button}
            title="+"
            onPress={() => this.incrementCount()}
          />
          <Separator />
          <Button
            style={styles.button}
            title="-"
            onPress={() => this.decrementCount()}
          />
          <Separator />
          <Button
            style={styles.button}
            title="Reset"
            onPress={() => this.resetCount()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    marginVertical: 12,
  },
  separator: {
    marginVertical: 8,
  },
});
