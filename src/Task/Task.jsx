import { StyleSheet, Text, View,TextInput,Button } from "react-native";
import React from "react";

const Task = ({handleChangeInputTask,handleAddListTask,task}) => {
    return (
        <View style={styles.textContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChangeInputTask}
                    value={task}
                    placeholder="Ingrese una tarea"
                />
                <Button
                    title="ADD"
                    color="#2196F3"
                    onPress={()=>handleAddListTask(task)}
                />
            </View>
    );
};

export default Task;

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
