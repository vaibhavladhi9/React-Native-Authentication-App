import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Box from '../../Components/Forms/Box';
import SubmitButton from '../../Components/SubmitButton';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[loading , setLoading] = useState(false);
  //btn function 
  const handleSubmit = ({navigation}) =>{
    try{
      setLoading(true);
if(!name || !email || !password){
   Alert.alert('please fill all fields');
  setLoading(false);
  return;

}
setLoading(false);
console.log("Register Data => " , {name  , email , password});

    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <Box inputTitle={'Name'} value={name} setValue={setName} />
        <Box
          inputTitle={'Email'}
          keyboardType='email-address'
          autoCompleteType='email'
          value={email}
          setValue={setEmail}
        />
        <Box
          inputTitle={'Password'}
          secureTextEntry={true}
          autoCompleteType='password'
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <SubmitButton btnTitle="Register" loading={loading}
      handleSubmit={handleSubmit}
      />
      <Text style = {styles.linkText}>
         Alrady Register please {" "}<Text style = {styles.link}
          onPress={()=>{navigation.navigate("Login")}}>LOGIN</Text>{" "}

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e2225',
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: '#af9f85',
  },
  linkText:{
    textAlign : 'center',
  
  },
  link:{
color : 'red'
  }
});
export default Register
