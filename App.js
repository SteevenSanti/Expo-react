import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';


//import styles from "./Styles";



//Set up redox

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options = {
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options = {
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen 
              name='EatsScreen'
              component={EatsScreen}
              options = {
                {
                  headerShown: false,
                }
              }
            />
          </Stack.Navigator>
          
          {/* <StatusBar style="auto" /> */}
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
