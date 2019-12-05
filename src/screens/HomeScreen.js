import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hi There!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => props.navigation.navigate('Components')} 
      />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
