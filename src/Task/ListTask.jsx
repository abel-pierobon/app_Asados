import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";

const ListTask = ({listTask}) => {
    return (
        <View style={styles.flat}>
            <Text style={styles.title}> Lista de tareas pendientes </Text>
            <FlatList
                data={listTask}
                keyExtractor={(task) => task.id.toString()}
                renderItem={({ item }) => <Text>{item.value}</Text>}
            />
        </View>
    );
};

export default ListTask;

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
