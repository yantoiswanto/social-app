import { StyleSheet, Text, View, TextInputProps, TextInput } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: object;
  inputRef?: React.RefObject<TextInput>;
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.icon}
      <TextInput 
        style={{ flex: 1 }} 
        placeholderTextColor={theme.colors.textLight} 
        ref={props.inputRef}
        {...props} 
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp(7.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12,
    },
})