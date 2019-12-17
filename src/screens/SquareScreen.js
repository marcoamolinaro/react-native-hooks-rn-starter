import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -1 * COLOR_INCREMENT;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
    // state === { red: number, blue: number, green: number }
    // action === { colorToChange: 'red' || 'blue' || 'green', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        default:
            return state;
    }

};

const SquareScreen = () => {

    const [ state, dispatch ] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
    const { red, blue, green } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: COLOR_DECREMENT })}
                color="Red" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_DECREMENT })}           
                color="Blue" />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: COLOR_DECREMENT })}
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
