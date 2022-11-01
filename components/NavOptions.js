import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
];
const NavOptions = () => {
    const navigation = useNavigation();
    const origin =useSelector(selectOrigin);
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor = {(item) => item.id}
        renderItem={({item}) =>(
            <TouchableOpacity 
            style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 ml-5`,{height:250}]}
            onPress = {() => {
                navigation.navigate(item.screen);
            }}
            disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image 
                        style = {
                            {
                                width: 120,
                                height: 120,
                                resizeMode: 'contain',
                                alignSelf:'center',
                                justifyContent: 'center'
                            }
                        }
                        source={{
                            uri: item.image
                        }}
                    />
                    <Text style = {tw.style("mt-2 text-lg font-semibold")}>{item.title}</Text>
                    <AntDesign name="arrowright" size={24} color="white" style={tw.style("bg-black p-2 rounded-full w-10 mt-4")} />
                </View>
            </TouchableOpacity>
        )
            
        }
    />
    

    
  );
};

export default NavOptions

