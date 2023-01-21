import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment'
import Success from './screens/success';
import Pending from './screens/pending';
import Completed from './screens/completed';
import CallAmb from './screens/callAmb'
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
       
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Success}
          name="Success"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={Pending}
          name="Pending"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CallAmb}
          name="CallAmb"
          options={{headerShown: false}}
        />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;