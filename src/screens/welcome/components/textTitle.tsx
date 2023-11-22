import { Text, View, StyleSheet } from "react-native";

interface TextTitleProps {
    text: string;
}

export function TextTitle ({text}:TextTitleProps) {

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
        fontSize:36,
        paddingHorizontal:30,
        marginTop:20,
        textAlign:'center',
        fontWeight:'700',
        color:'#061237',
    }
})