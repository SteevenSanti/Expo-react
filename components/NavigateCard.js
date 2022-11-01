import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
  const navigation =useNavigation();
  return (
    <View>
      <Button 
        title='Change'
        onPress={() => {
          navigation.navigate("RideOptionCard");
        }}
      />
      <Text>NavigateCard</Text>
    </View>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})