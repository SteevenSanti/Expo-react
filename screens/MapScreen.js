import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../components/Map';
import MapView, { Marker } from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
  return (


    <View>
      <TouchableOpacity 
      style={tw.style("bg-gray-100 absolute top-10 left-8 z-50 p-3 rounded-full shadow-lg")}
      onPress={()=>{navigation.navigate("HomeScreen")}}
      >
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
      
      <View style={tw.style("h-1/2")} > 
        <Map />
      </View>
      <View style={tw.style("h-1/2")} > 
        <Stack.Navigator>
            <Stack.Screen 
                name = "NavigateCard"
                component={NavigateCard}
                options ={{
                    headerShown: false,
                }}

            />
            <Stack.Screen 
                name = "RideOptionCard"
                component={RideOptionCard}
                options ={{
                    headerShown: false,
                }}

            />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})