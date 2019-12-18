import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Components: ComponentScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  Color: ColorScreen,
  Square: SquareScreen,
  CounterReducer: CounterReducerScreen,
  Text: TextScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
}
);

export default createAppContainer(navigator);
