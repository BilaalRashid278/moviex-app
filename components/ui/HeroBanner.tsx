import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, {memo} from 'react'
// import LinearGradient from 'react-native-linear-gradient'

const HeroBanner = ({backgroundImageUrl} : {backgroundImageUrl : string}) => {
    console.log(backgroundImageUrl,'backgroundImageUrl')
  return (
    <View style={styles.root}>
      <ImageBackground style={{height : '100%', opacity : 0.5}} source={{uri : "https://image.tmdb.org/t/p/original/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg"}}/>
      {/* <LinearGradient colors={["#000","#fff"]} style={styles.overlay}>
        <Text>Hello</Text>
      </LinearGradient> */}
    </View>
  )
}

export default memo(HeroBanner);

const styles = StyleSheet.create({
    root : {
        height : '50%',
        width : '100%',
        position : 'absolute',
    },
    overlay : {
        // borderWidth : 2,
        // borderColor : 'green',
        position : 'absolute',
        width : '100%',
        height : 90,
        bottom : 0,
        zIndex : 1000,
        opacity : 0.8
    }
})