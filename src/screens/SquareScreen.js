import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'blue, 'green'
        // change === +COLOR_INCREMENT, -COLOR_INCREMENT
        switch (color) {
            case 'red': 
                let valueRed = red + change;
                valueRed > MAX_COLOR_VALUE | valueRed < MIN_COLOR_VALUE ? null : setRed(valueRed);
                return; 
            case 'blue': 
                let valueBlue = blue + change;
                valueBlue > MAX_COLOR_VALUE | valueBlue < MIN_COLOR_VALUE ? null : setBlue(valueBlue);
                return; 
            case 'green': 
                let valueGreen = green + change;
                valueGreen > MAX_COLOR_VALUE | valueGreen < MIN_COLOR_VALUE ? null : setGreen(valueGreen);
                return; 
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}           
                color="Blue" />
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green" />

            <View 
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${blue}, ${green})`
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
