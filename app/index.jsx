import { Image, StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'
import ThemedView from '../components/ThemedView'
import Logo from '../components/Logo'
import ThemedSpacer from '../components/ThemedSpacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Logo style={styles.img}/>
      <Text style={styles.title}>Let's GO!:D</Text>
      <ThemedSpacer />
      <Text >Reading List App</Text>
      <Link href={"/about"} style={styles.link}>About page</Link>
      <Link href={"/contact"} style={styles.link}>Contact page</Link>
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