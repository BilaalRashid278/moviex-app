import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, {memo} from 'react'

const HeroBanner = ({backgroundImageUrl} : {backgroundImageUrl : string}) => {
  return (
    <View style={styles.root}>
      <ImageBackground style={{height : '100%', opacity : 0.5}} source={{uri : backgroundImageUrl}}/>
      <View style={styles.overlay}></View>
    </View>
  )
}

export default memo(HeroBanner);

const styles = StyleSheet.create({
    root : {
        height : '50%',
        width : '100%',
        // position : 'absolute',
    },
    overlay : {
        position : 'absolute',
        width : '100%',
        height : 90,
        bottom : -40,
        zIndex : 1000,
        opacity : 0.5,
        backgroundColor : "black"
    }
})