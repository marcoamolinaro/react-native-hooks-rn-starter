import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 25;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'blue, 'green'
        // change === +COLOR_INCREMENT, -COLOR_INCREMENT
        let value = red + change;
        if (color === 'red') {
            if (value > MAX_COLOR_VALUE | value < MIN_COLOR_VALUE) {
                return;
            }
            setRed(value);
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorCounter 
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}            
                color="Blue" />
            <ColorCounter 
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
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