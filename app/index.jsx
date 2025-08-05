import { Image, StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'
import ThemedView from '../components/ThemedView'
import Logo from '../components/Logo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Logo style={styles.img}/>
      <ThemedText style={styles.title}>Let's GO!:D</ThemedText>
      <Spacer />
      <ThemedText >Reading List App</ThemedText>
      <ThemedText></ThemedText>
      <Link href={"/Login"} style={styles.link}><ThemedText>Login page</ThemedText></Link>
      <Link href={"/Register"} style={styles.link}><ThemedText>Register page</ThemedText></Link>
      <Link href={"/create"} style={styles.link}><ThemedText>Create page</ThemedText></Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    },
    img:{
      marginVertical:30
    }
})