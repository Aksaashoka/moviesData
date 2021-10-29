import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    //  <SafeAreaView>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Home />
    </View>
    //</SafeAreaView>
  );
};

export default App;
