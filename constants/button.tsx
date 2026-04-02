import { TouchableOpacity, StyleSheet, ViewProps, ActivityIndicator } from "react-native";
import { ButtonText } from "./text";
import { Colors } from "./theme";

type Type =
  | "primary"
  | "secondary";

interface props extends ViewProps{
    onPress:()=>void;
    buttonColor?: string;
    textColor?: string;
    type?: Type;
    isLoading?: boolean;
}


export default function Button({ onPress, buttonColor, textColor, type="primary", isLoading = false, style, ...props}: props){
    const handleTypeBackground = (type: string, buttonColor: string | undefined)=>{
        if(type === "primary"){
            return {
                backgroundColor: buttonColor || Colors.primary
            }
        }else{
            return {
                borderColor: buttonColor || Colors.secondary
            }
        }
    }
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, styles[type],
            handleTypeBackground(type, buttonColor),
        style]}
        >
            {
                isLoading ?
                <ActivityIndicator size={23} />
                :
                <ButtonText color={type === "primary" ? textColor || "#FFF" : textColor || buttonColor || Colors.secondary} {...props}/>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        margin: 20,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    primary:{
        backgroundColor: Colors.primary,
    },
    secondary:{
        borderWidth: 1,
        borderColor: Colors.secondary
    }
})