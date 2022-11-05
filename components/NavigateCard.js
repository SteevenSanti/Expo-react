import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import RideOptionCard from './RideOptionCard';
import NavFavourites from './NavFavourites';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const NavigateCard = () => {
  const navigation =useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style = {tw.style("bg-white flex-1") }>
      <Text style = {tw.style("text-center py-5 text-xl")}>NavigateCard</Text>
      <View style = {tw.style("border-t border-gray-200 flex-shrink")}>
        <View>
          <GooglePlacesAutocomplete 
            placeholder='Where to?'
            styles={styles}
            fetchDetails = {true}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details = null)=>{
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,

              }));
              navigation.navigate(RideOptionCard)
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language:"en",
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}

          />
          <NavFavourites />
        </View>

        <View style= {tw.style("flex-row flex",{justifyContent:'space-evenly'})}>
          <TouchableOpacity 
          style={tw.style("flex flex-row bg-black w-24 px-4 py-3 rounded-full",{alignItems:'center', justifyContent:'center',})}
          onPress ={()=>navigation.navigate("RideOptionCard")}
          >
            <FontAwesome name="car" size={16} color="white" />
            <Text style = {tw.style("text-white text-center")}> Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw.style("flex flex-row bg-gray-300 w-24 px-4 py-3 rounded-full mt-2",{alignItems:'center', justifyContent:'center',})}>
          <Ionicons name="fast-food-outline" size={24} color="black" />
          <Text style = {tw.style("text-black text-center")}> Eats</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput:{
    backgroundColor: "#DDDDDF",
    borderRaius: 0,
    fontSize: 18,
  },
  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom: 0,
  },

})