import { createStackNavigator } from '@react-navigation/stack';
import Data from '../src/pages/Data';  
import Home from '../src/pages/Home';  
import Feed from '../src/pages/Feed';
import Way from '../src/pages/Way';  
import Size from '../src/pages/Size';
import Price from '../src/pages/Price';
import Weight from '../src/pages/Weight';  
import Done from '../src/pages/Done';  
import { Sliders } from '../src/pages/Price';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="Data">
  <Stack.Screen name="Data" component={Data} />
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Feed" component={Feed} />
  <Stack.Screen name="Way" component={Way} />
  <Stack.Screen name="Size" component={Size} />
  <Stack.Screen name="Weight" component={Weight} />
  <Stack.Screen name="Done" component={Done} />
  <Stack.Screen name="Price" component={Sliders} />



</Stack.Navigator>

  );
};

export default AppNavigator;

