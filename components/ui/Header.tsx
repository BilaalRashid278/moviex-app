import { View, StyleSheet, Image, TouchableOpacity, TextInput, Animated, useAnimatedValue } from 'react-native'
import React, { memo, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Header: React.FC = () => {
    const [showSearch,setShowSearch] = React.useState<boolean>(false);
    const { push } = useRouter();
    const goHome : any = "(home)";
    const translateYAnimation = useAnimatedValue(-70);
    const _hanldeUpdateSearch = () => {
        setShowSearch((prev : boolean) => !prev);
    }
    useEffect(() => {
        if(showSearch){
            Animated.timing(translateYAnimation, {
                toValue : 50,
                duration : 300,
                useNativeDriver : false
            }).start();
        } else Animated.timing(translateYAnimation, {
            toValue : -70,
            duration : 100,
            useNativeDriver : false
        }).start();
    },[showSearch]);
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => push(goHome)}>
                <Image source={require('@/assets/images/movix-logo.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={_hanldeUpdateSearch}>
                <Ionicons name={showSearch ? "close" : "search"} color='white' size={25} />
            </TouchableOpacity>
            <Animated.View style={[styles.animatedViewTextInput,{transform : [{translateX : "-43%"}, {translateY : translateYAnimation}]}]}>
                <TextInput style={styles.textInput} placeholder='Search..'/>
            </Animated.View>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor : 'rgba(0, 0, 0, .25)',
        zIndex : 100
    },
    textInput : {
        backgroundColor : 'white',
        width : '100%',
        borderRadius : 5
    },
    animatedViewTextInput : {
        position : "absolute",
        width : '100%',
        // borderWidth : 2,
        // borderColor : 'green',
        left : '50%'
    }
})