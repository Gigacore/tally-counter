/**
 * Tally Counter Pro
 * https://github.com/Gigacore/tally-counter-pro
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import TallyCounter from './components/views/TallyCounter';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TallyCounter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default App;
