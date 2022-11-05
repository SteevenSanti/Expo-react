import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import tw from 'twrnc';

const NavFavourites = () => {
    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Code Street, London, UK",
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "London Eye, London, UK",
        },
    ];

  return (
      <FlatList 
        data={data}
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent = {
            () => <View style = {tw.style("bg-gray-400 h-0.25")}/>
        }
        renderItem={({item})=>(
            <TouchableOpacity style={tw.style("flex-row items-center p-3")}>
                <View style={tw.style("mr-3 rounded-full bg-gray-300 p-3")}>
                    <Entypo name={item.icon} size={24} color="black" />
                </View>
                <View>
                    <Text style={tw.style("font-semibold text-lg")}>{item.location}</Text>
                    <Text style={tw.style("text-gray-500")}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
         )}
      />
    
    
  )
}

export default NavFavourites

const styles = StyleSheet.create({})