import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hi There!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate('Components')} 
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => navigation.navigate('List')} 
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
