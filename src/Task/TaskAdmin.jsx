import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Alert } from "react-native";
import Name from "./Name";
import ListName from "./ListName";
import ListTask from "./ListTask";
import AsignedTask from "./AsignedTask";
import Task from "./Task";

const TaskAdmin = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const [assignedTasks, setAssignedTasks] = useState([]);

    const handleChangeInput = (text) => setName(text);
    const handleChangeInputTask = (text) => setTask(text);

    const handleAddList = () => {
        if (name.trim() !== "") {
            setList([...list, { id: Math.random().toString(), value: name }]);
            setName("");
        }
    };

    const handleAddListTask = () => {
        if (task.trim() !== "") {
            setListTask([
                ...listTask,
                { id: Math.random().toString(), value: task },
            ]);
            setTask("");
        }
    };

    const handleAssignTasks = () => {
        const shuffledNames = shuffleArray(list);
        const shuffledTasks = shuffleArray(listTask);

        const assigned = shuffledNames.map((nameObj, index) => ({
            name: nameObj.value,
            task: shuffledTasks[index % shuffledTasks.length].value,
        }));

        setAssignedTasks(assigned);
    };

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };
    const clearTask = () => {
        setListTask([]);
        setList([]);
        setAssignedTasks([]);
        Alert.alert("sistema reiniciado");
    };

    return (
        <View style={styles.container}>
            <Name
                handleChangeInput={handleChangeInput}
                handleAddList={handleAddList}
                name={name}
            />
            <Task
                handleChangeInputTask={handleChangeInputTask}
                handleAddListTask={handleAddListTask}
                task={task}
            />
            <View style={styles.listados}>
                {list.length > 0 ? (
                    <>
                        <ListName list={list} />
                    </>
                ) : (
                    <Text style={{ marginHorizontal: 10 }}></Text>
                )}
                {listTask.length > 0 ? (
                    <>
                        <ListTask listTask={listTask} />
                    </>
                ) : (
                    <Text></Text>
                )}
            </View>
            <>
                {list.length > 0 && listTask.length ? (
                    <View style={{ flexDirection:'row'}}>
                        <View style={{marginRight:5}}>
                            <Button
                                title="Sortear Tareas"
                                onPress={handleAssignTasks}
                            />
                        </View>
                        <View style={{marginLeft:5}}>
                            <Button
                                title="Limpiar pantalla"
                                onPress={clearTask}
                            />
                        </View>
                    </View>
                ) : (
                    <Text></Text>
                )}

                <AsignedTask assignedTasks={assignedTasks} />
            </>
        </View>
    );
};

export default TaskAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 30,
    },
    textContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 15,
    },
    listados: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 15,
    },
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
    flatTask: {
        padding: 10,
        borderRadius: 4,
        margin: 5,
        marginVertical: 10,
        width: "90%",
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
