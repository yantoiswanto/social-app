import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bgColor="white">
            <StatusBar backgroundColor="dark" />
            <View style={styles.container}>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/images/signin.png')} />
                <View style={{ gap: 20}}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Where every through find a home and every image tells a story</Text>
                </View>

                <View style={styles.footer}>
                    <Button title="Getting Started"
                    buttonStyle={{marginHorizontal: wp(3)}} 
                    onPress={() => router.push('/signUp')}
                     />

                     <View style={styles.bottomTextContainer}>
                        <Text style={styles.bottomText}>Already have an account?</Text>
                        <Pressable onPress={() => router.push('/login')}>
                            <Text style={[styles.bottomText, {
                                color:theme.colors.primaryDark, 
                                fontWeight: theme.fonts.semiBold
                            }]}>Login</Text>
                        </Pressable>
                     </View>

                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    image: {
        width: wp(100),
        height: hp(30),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.semiBold,
    },
    subtitle: {
        textAlign:'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,
    },
    footer: {
        gap: 30,
        width: '100%',
    }, 
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        alignItems: 'center',
    },
    bottomText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
})