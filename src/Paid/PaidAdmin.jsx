import { StyleSheet, Text, View,FlatList } from "react-native";
import React, { useContext } from "react";

import { Context } from "../Contex";


const PaidAdmin = () => {
    const {list}=useContext(Context)
    return (
        <View style={styles.container}>
            {/* {list.length >0 ? (
                <FlatList 
                data={list}
                keyExtractor={(id) => id.toString()}
                renderItem={({ item }) => (
                    <Text style={{ textTransform: "uppercase" }}>
                        {item.value}
                    </Text>
                )}
            />
            ):(
                <Text> sin participantes</Text>
            )} */}
            
        </View>
    );
};

export default PaidAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 30,
    },
});
