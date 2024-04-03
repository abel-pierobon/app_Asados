import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskAdmin from "./Task/TaskAdmin";
import PaidAdmin from "./Paid/PaidAdmin";
import {ContextProvider} from './Contex'
const Main = () => {
    return (
        <ContextProvider>
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {" "}
                    GESTOR DE ASADOS
                </Text>
                <PaidAdmin />
                <TaskAdmin />
            </View>
        </ContextProvider>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 30,
    },
});
