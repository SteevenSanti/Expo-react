import { StyleSheet, Text, View, Button, Share, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import ViewShot, { captureScreen } from 'react-native-view-shot';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import 'intl';
import 'intl/locale-data/jsonp/en';


const RideOptionCard = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const SURGE_CHARGE_RATE =0.47;
  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn"
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.1,
      image: "https://links.papareact.com/5w8"
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.5,
      image: "https://links.papareact.com/7pf"
    },
  ];
  return (
    <SafeAreaView style={tw.style("bg-white flex")}>
      <View style={{ marginTop:-30, width:"100%",height:60, flex:0, justifyContent: 'center'}}>
        <TouchableOpacity 
          onPress ={()=> {
            navigation.navigate("NavigateCard")
            console.log("Holas")
          }}
          style={tw.style("p-3 rounded-full",{bottom: 0, width:"50%", flex:1,backgroundColor: "white",position:'absolute',top:10})} 
           
          >
        <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw.style("text-center text-xl",{backgroundColor: "white",position:'absolute', left:150})}>
          Select a Ride {travelTimeInformation?.distance.text}
        </Text>
        
      </View>
      <FlatList 
        data={data}
       
        
        keyExtractor = {(item) => item.id}
        renderItem = {({item})=>(
          <TouchableOpacity style={tw.style(`flex-row justify-between items-center px-10 ${ item.id === select?.id && "bg-gray-200"}`)}
          onPress = {()=>{
            setSelect(item)
            console.log(item)
           }}>
            <Image 
              style ={{width: 100, height: 100, resizeMode: "contain"}}
              source = {{uri: item.image}}
            />
            <View style={tw.style("-ml-6")}>
              <Text style={tw.style("text-xl font-semibold")}>
                {item.title}
              </Text>
              <Text>
                {travelTimeInformation?.duration.text}
              </Text>
            </View>
            <Text>{
              new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(travelTimeInformation?.distance.value*item.multiplier*SURGE_CHARGE_RATE/1000)
            }</Text>


          </TouchableOpacity>
          
        )}
      />
      <View >
        <TouchableOpacity disabled={!select} style={tw.style("bg-black py-3 m-3",{borderRadius:10, textAlign:'center'})}>
          <Text style={tw.style("text-white text-xl text-center")}> Choose {select?.title} </Text>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})