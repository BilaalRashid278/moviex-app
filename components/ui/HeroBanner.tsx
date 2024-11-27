import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

const HeroBanner = ({ backgroundImageUrl }: { backgroundImageUrl: string }) => {
  return (
    <View style={styles.root}>
      <ImageBackground style={{ height: '100%', opacity: 0.5 }} source={{ uri: backgroundImageUrl }} />
      <View style={styles.inlineSearch}>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 30, color: "white" }}>Welcome.</Text>
        <Text style={{ textAlign: "center", color: "white" }}>Millions of movies, TV shows and people to discover.</Text>
        <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "500" }}>Explore Now.</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search for a movie or TV show..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.overlay}></View>
    </View>
  )
}

export default memo(HeroBanner);

const styles = StyleSheet.create({
  root: {
    height: '50%',
    width: '100%',
    // position : 'absolute',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: 90,
    bottom: -40,
    zIndex: 1000,
    opacity: 0.5,
    backgroundColor: "black"
  },
  inlineSearch: {
    // borderWidth : 1,
    // borderColor : "white",
    height: 100,
    position: 'absolute',
    left: "50%",
    top: "50%",
    width: "100%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    padding: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF8540',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})