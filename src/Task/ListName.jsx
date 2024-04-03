import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";

const ListName = ({list}) => {
    return (
        <View style={styles.flat}>
            <Text style={styles.title}> Lista de personas </Text>
            <FlatList
                data={list}
                keyExtractor={(name) => name.id.toString()}
                renderItem={({ item }) => (
                    <Text style={{ textTransform: "uppercase" }}>
                        {item.value}
                    </Text>
                )}
            />
        </View>
    );
};

export default ListName;

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        color: "dodgerblue",
        fontSize: 15,
        fontStyle: "italic",
        textDecorationLine: "underline",
        lineHeight: 30,
    },
    flat: {
        borderColor: "powderblue",
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        margin: 5,
        marginVertical: 10,
    },
});
