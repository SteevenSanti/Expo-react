import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, selectTravelTimeInformation, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from "@env";



const Map = () => {

const origin = useSelector(selectOrigin);
const destination = useSelector(selectDestination);
const travelInformation = useSelector(selectTravelTimeInformation);
const mapRef = useRef()
const dispatch = useDispatch();

useEffect(() => {
    datosAVer();
    if(!origin || !destination) return;

    //zoom
    datosAVer();
    mapRef.current.fitToSuppliedMarkers(["origin","destination"],{edgePadding:{ top:50, right: 50, botton: 10, left:50 }, animated: true});
    // fitToSuppliedMarkers(["origin","destination"],{
    //         edgePadding: { top:50, right: 50, botton: 50, left:50 }
    // })
    
  }, [origin, destination]);

const datosAVer = () =>{
    //console.log({mapRef})
    
    
}
useEffect(() => {
  if(!origin || !destination) return;
  const getTraveltime= async() =>{
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`).then((res)=> res.json()).then(data => dispatch(setTravelTimeInformation(data.rows[0].elements[0])))
  }
  getTraveltime();
}, [origin, destination]) //add google_maps,Key



  return (
   
       <MapView
            ref={mapRef}
            onMapReady={()=>{
                console.log(mapRef.current)
            }}
            style = {tw.style("flex-1")}
            mapType = 'mutedStandard'
            initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            }}
        >
            {origin && destination &&( 
                <MapViewDirections 
                    origin={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                            }}
                    destination={
                        {
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }
                    }
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeColor="black"
                    strokeWidth={3}


                />
            )}
            {origin?.location && (
                <Marker  
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title = "Origin"
                    description={origin.description}
                    identifier = "origin"
                />
                
            )}
            {destination?.location && (
                <Marker  
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title = "Destination"
                    description={destination.description}
                    identifier = "destination"
                />
                
            )}
        </MapView>
    
  )
}

export default Map

const styles = StyleSheet.create({})