import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {ContextProvider} from './Contex'
import Login from "./Login/Login";
import NuevoEvento from "./eventos/NuevoEvento";
import FirstViews from "./FirstViews";
const Main = () => {
    return (
        <ContextProvider>
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {" "}
                    GESTOR DE ASADOS
                </Text>
                <FirstViews />
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
