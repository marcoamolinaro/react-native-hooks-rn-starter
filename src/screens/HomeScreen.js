import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hi There!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => console.log('Button Pressed')} 
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
