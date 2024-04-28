import { View , Text , StyleSheet, TextInput } from 'react-native';
import Register from './Screens/auth/Register';
import Login from './Screens/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'> 
      <Stack.Screen name= "Register" component={Register} options={{headerShown : false}}/>
      <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>

      
    </Stack.Navigator>

  </NavigationContainer>
  );
}


