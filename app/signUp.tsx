import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper';
import { theme } from '@/constants/theme';
import Icon from '@/assets/icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import BackButton from '@/components/BackButton';
import { hp, wp } from '@/helpers/common';
import Input from '@/components/Input';
import Button from '@/components/Button';

const SignUp = () => {
  const router = useRouter()
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !nameRef.current || !passwordRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields!');
      return;
    }

  }


  return (
    <ScreenWrapper bgColor='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <BackButton router={router} />

        <View>
          <Text style={styles.title}>Let's</Text>
          <Text style={styles.title}>Get Started</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create an account
          </Text>
          <Input icon={<Icon name='user' size={26} strokeWidth={1.6} />}
            placeholder='Enter your name'
            onChange={value => nameRef.current = value.nativeEvent.text} />
          <Input icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
            placeholder='Enter your email'
            onChange={value => emailRef.current = value.nativeEvent.text} />
          <Input icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
            placeholder='Enter your password'
            secureTextEntry={true}
            onChange={value => passwordRef.current = value.nativeEvent.text} />

          <Button title='Sign Up' loading={loading} onPress={onSubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account!</Text>
          <Pressable onPress={() => router.push('/login')}>
            <Text style={[styles.footerText,
            { color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold }]}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
  },
  form: {
    gap: 25,
  },
  forgetPassword: {
    textAlign: 'right',
    color: theme.colors.text,
    fontWeight: theme.fonts.semiBold,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  }
})