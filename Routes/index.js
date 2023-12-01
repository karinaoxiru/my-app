import { createStackNavigator } from '@react-navigation/stack';
import Data from '../src/pages/Data';  
import Home from '../src/pages/Home';  
import Feed from '../src/pages/Feed';
import Way from '../src/pages/Way';  


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="Data">
  <Stack.Screen name="Data" component={Data} />
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Feed" component={Feed} />
  <Stack.Screen name="Way" component={Way} />

</Stack.Navigator>

  );
};

export default AppNavigator;

