import { View, Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({title=false, style, ...props}) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Color.light
    const TextColor = title ? theme.title : theme.text
  return (
      <Text style={[{color:TextColor}, style]}{...props}/>
  )
}

export default ThemedText