import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

export default function CircularProgress({ rating } : any) {
  const radius = 18;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = (rating / 10) * circumference;

  let color = rating >= 7 ? 'green' : rating >= 4 ? 'orange' : 'red';

  return (
    <View style={styles.container}>
      <Svg width={80} height={80}>
        {/* Background Circle */}
        <Circle
          cx="40"
          cy="40"
          r={radius + strokeWidth / 2} // Slightly larger for background
          fill="white" // Background color white
        />
        
        {/* Shadow Circle */}
        <Circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Progress Circle */}
        <Circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress}, ${circumference}`}
          fill="none"
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.text}>{rating.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000', // Black text for better visibility
  },
});
