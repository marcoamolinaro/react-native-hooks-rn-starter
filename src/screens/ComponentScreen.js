import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const greeting = 'Hi There!';
    const name=<Text>Marco</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>
                This is the ComponentScreen
            </Text>
            <Text>
               {greeting} 
            </Text>
            {name}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;