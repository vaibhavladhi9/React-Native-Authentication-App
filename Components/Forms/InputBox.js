import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputBox = () => {
  return (
    <View>
      <Text>Name</Text>
      <TextInput style = {StyleSheet.inputBox}/>
      <Text>Email</Text>
      <TextInput style = {StyleSheet.inputBox}/>
      <Text>passoward</Text>
      <TextInput style = {StyleSheet.inputBox}/>
    </View>
  )
}

export default InputBox