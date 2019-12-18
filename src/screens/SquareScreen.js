import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -1 * COLOR_INCREMENT;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    let value = 0;

    switch (action.colorToChange) {
        case 'red':
            value = state.red + action.amount;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, red: state.red + action.amount};
        case 'green':
            value = state.green + action.amount;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, green: state.green + action.amount};
        case 'blue':
            value = state.blue + action.amount;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, blue: state.blue + action.amount};
        default:
            return state;
    }

};

const SquareScreen = () => {

    const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: COLOR_DECREMENT })}
                color="Red" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: COLOR_DECREMENT })}
                color="Green" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_DECREMENT })}           
                color="Blue" />
            <View 
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
