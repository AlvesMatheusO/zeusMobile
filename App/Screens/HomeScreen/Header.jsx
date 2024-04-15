import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
    return (
        <View>
            <LinearGradient
            colors={['#000000', '#200fbab4']}
            style={styles.container}>

                <View>
                    <Image source={require('../../../assets/logo.png')}
                        style={styles.logo} />
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 15,
        paddingTop: 20,
        alignItems: "center",
        alignContent: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    logo: {
        width: 45,
        height: 50
    }
})
