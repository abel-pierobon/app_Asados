import { StyleSheet, Text, View,useContext } from "react-native";
import React from "react";
import { Context } from "../Contex";
const Eventos = () => {
    const { usuario,handleCerrarSesion } = useContext(Context);
    return (
        <View
            styles={{
                flex: 1,
                justifyContent: "center",
                marginHorizontal: 10,
            }}
        >
            <Button onPress={handleCerrarSesion} title="cerrar sesion" />
            <NuevoEvento />
        </View>
    );
};

export default Eventos;

const styles = StyleSheet.create({});
