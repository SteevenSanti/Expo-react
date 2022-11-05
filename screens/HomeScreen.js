import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw.style('bg-white', 'h-full')}>
        <View>
            <View style={tw.style('p-5')}>
                <Image
                style={{
                    width:100,
                    height:100,
                    resizeMode: 'contain',
                }}
                source={{
                    uri:"https://links.papareact.com/gzs", 
                }}
                />
            </View>
            
            <GooglePlacesAutocomplete 
                placeholder='Where From?'
                renderDescription={row => row.description}
                enablePoweredByContainer= {false}
                fetchDetails = {true}
                minLength={2}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput:{
                        fontSize:18,
                    },
                }}
                onPress= {(data, datails = null) => {
                    dispatch(setOrigin({
                        location: datails.geometry.location,
                        description: data.description
                    }))
                    dispatch(setDestination(  null  ))
                }}
                returnKeyType={'search'}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions/>
            <NavFavourites/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});