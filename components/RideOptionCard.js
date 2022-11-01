import { StyleSheet, Text, View, Button, Share } from 'react-native'
import React, { useRef } from 'react'
import ViewShot, { captureScreen } from 'react-native-view-shot';

const RideOptionCard = () => {
  const viewShotRef = useRef();
  async function captureViewShot(){
    const imageURI = await viewShotRef.current.capture();
    console.log(imageURI);
    Share.share({title: "Image",url: imageURI});
  }
  function captureScreenShot(){
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      (uri) => {
        Share.share({titel:'Imagen', url: uri})
        console.log('Image saved to',uri)},
      (error) => console.log('error',error),
    );
  }
  return (
    <ViewShot ref={viewShotRef} style={{flex:1}} options={{fileName: "Imagecap", format:'jpg', quality:1.0}} >
      <View style={{ marginTop: 50 }}>
        <Text>View</Text>
        <Button 
        title='capture view Shot'
        onPress={captureViewShot}
        />
        <Button 
        title='capture Screen Shot'
        onPress={captureScreenShot}
        />
      </View>
    </ViewShot>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})