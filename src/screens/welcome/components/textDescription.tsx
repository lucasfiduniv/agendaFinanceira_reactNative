import { Text, View, StyleSheet } from "react-native";

interface TextDescriptionProps {
    text: string;
}

export function TextDescription ({text}:TextDescriptionProps) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },   
    text:{
        fontSize:18,
        paddingHorizontal:40,
        marginTop:12,
        textAlign:'center',
        fontWeight:'200',
        color:'#061237',
    }
})