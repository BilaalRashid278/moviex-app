import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Header: React.FC = () => {
    const { push } = useRouter();
    const goHome : any = "(home)";
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => push(goHome)}>
                <Image source={require('@/assets/images/movix-logo.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name='search' color='white' size={25} />
            </TouchableOpacity>
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
    }
})