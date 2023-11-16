import { Image, Text, View, StyleSheet } from 'react-native'
import icon from "../../../../assets/Logomark.png"


export function Step1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={icon}/>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFFFFF",
    alignItems:"center"
  },
  header:{
    height:
  }
})