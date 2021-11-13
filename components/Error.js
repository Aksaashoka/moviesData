import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const defaultProps = {
  errorText1: 'ups',
  errorText2: 'make',
};
export default function Error() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops! Something went wrong</Text>
      <Text style={styles.text}>
        Make sure you are online and restart the App
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
