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
      <Button 
        title="Go to Image Demo" 
        onPress={() => navigation.navigate('Image')} 
      />
      <Button 
        title="Go to Counter Demo" 
        onPress={() => navigation.navigate('Counter')} 
      />      
      <Button 
        title="Go to Color Demo" 
        onPress={() => navigation.navigate('Color')} 
      />        
      <Button 
        title="Go to Square Demo" 
        onPress={() => navigation.navigate('Square')} 
      />  
      <Button 
        title="Go to CounterReducer Demo" 
        onPress={() => navigation.navigate('CounterReducer')} 
      />     
      <Button 
        title="Go to Text Demo" 
        onPress={() => navigation.navigate('Text')} 
      />  
      <Button 
        title="Go to Password Demo" 
        onPress={() => navigation.navigate('Password')} 
      />  
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
