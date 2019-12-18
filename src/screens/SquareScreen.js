import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -1 * COLOR_INCREMENT;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    let value = 0;

    switch (action.type) {
        case 'change_red':
            value = state.red + action.payload;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, red: state.red + action.payload};
        case 'change_green':
            value = state.green + action.payload;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, green: state.green + action.payload};
        case 'change_blue':
            value = state.blue + action.payload;
            return value > MAX_COLOR_VALUE || value < MIN_COLOR_VALUE
            ? state
            : {...state, blue: state.blue + action.payload};
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
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: COLOR_DECREMENT })}
                color="Red" />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: COLOR_DECREMENT })}
                color="Green" />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'chane_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'chane_blue', payload: COLOR_DECREMENT })}           
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
