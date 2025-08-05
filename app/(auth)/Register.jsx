import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleSubmit= () =>{
    console.log('Button clicked!')
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Register</ThemedText>
      <Spacer height={20} />
      <ThemedButton onPress={handleSubmit}><Text>Register</Text></ThemedButton>
      <Spacer height={100}/>
      <Link href="/Login"><ThemedText style={{textAlign:"center"}}>Login instead</ThemedText></Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold"
    }
})