import {COLORS} from '@utils/constants';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const LineDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 1,
    paddingVertical: 5,
  },
  line: {
    flex: 1,
    borderLeftColor: COLORS.lightGray2,
    borderLeftWidth: 1,
  },
});
