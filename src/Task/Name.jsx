import { StyleSheet, Text, View,TextInput,Button } from "react-native";
import React, { useState,useEffect, useContext } from "react";
import { Context } from "../Contex";


const Name = ({}) => {
    const {handleChangeInput,handleAddList,name}=useContext(Context)
    
    return (
        <View style={styles.textContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChangeInput}
                    value={name}
                    placeholder='ingrese participantes'
                />
                <Button title="+" color="#2196F3" onPress={()=>handleAddList(name)} />
            </View>
    );
};

export default Name;

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 15,
    },
    textInput: {
        borderBottomWidth: 1,
        backgroundColor: "powderblue",
        borderBottomColor: "black",
        width: 240,
        fontSize: 16,
        height: 35,
        paddingHorizontal: 5,
    },
});
