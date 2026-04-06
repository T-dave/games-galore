import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import useAppTheme from "@/hooks/use-Theme";
import { useState } from "react";

interface SearchProps{
    handleSearch:(text:string)=>void;
}
export default function Search({handleSearch}:SearchProps){
    const {colour} = useAppTheme();
    const [searchText, setSearchText] = useState("");
    const handleClear=()=>{
        setSearchText("");
    }
    return (
        <View style={[styles.search, {backgroundColor:colour.cardBackground}]}>
             <Icon name="search" size={22} color={colour.text} />
             <TextInput 
             onChangeText={(text)=>setSearchText(text)}
             value={searchText}
             returnKeyType="search"
             style={[ styles.input, {color:colour.text} ]}
             clearButtonMode="while-editing" 
             onSubmitEditing={()=>handleSearch(searchText)}
             selectTextOnFocus
             placeholder="Enter your game"
             />
             <TouchableOpacity onPress={handleClear} style={{paddingHorizontal:10}}>
                <Icon name="times" size={22} color={colour.text} />
             </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        borderRadius:10,
        paddingLeft:10,
    },
    input:{
        flex:1,
        fontSize:18,
        marginLeft:5,
    }
});