import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "expo-image"
import React from 'react'
import CircularProgress from './CircleProgress'

interface RatingCardProps {
    imageUrl?: string
    title?: string
    date?: string
    rating?: number,
    isLocalImage?: boolean
}

const RatingCard: React.FC<RatingCardProps> = ({ imageUrl, title, date, isLocalImage = false, rating = 0 }) => {
    return (
        <TouchableOpacity activeOpacity={0.3}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 120, height: 150, borderRadius: 10 }} transition={100} source={isLocalImage ? require("@/assets/images/no-poster.png") : imageUrl} />
                    <View style={{ position: "absolute", bottom: -30, left: -10 }}>
                        <CircularProgress rating={rating} />
                    </View>
                </View>
                <View style={styles.dateTitleContainer}>
                    <Text style={{ color: "white", flexWrap: "wrap" }}>{title || "Unknown"}</Text>
                    <Text style={{ color: "white" }}>{date || ""}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RatingCard

const styles = StyleSheet.create({
    imageContainer: {

    },
    mainContainer: {
        padding: 2,
        // borderWidth : 2,
        // borderColor : 'white',
        maxWidth: 150
    },
    dateTitleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginTop: 12
    }
})