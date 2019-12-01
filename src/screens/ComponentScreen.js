import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name='Marco';
    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with react native!
            </Text>
            <Text style={styles.secondTextStyle}>
               My name is {name} 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    secondTextStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;