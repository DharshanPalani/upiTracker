import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Pages/Home';
import UPIScan from './Pages/UPIScan';
import AmountPage from './Pages/AmountPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UPIScan" component={UPIScan} />
        <Stack.Screen name="AmountPage" component={AmountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
