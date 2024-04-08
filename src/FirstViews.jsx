import { StyleSheet, Text, View } from "react-native";
import Login from "./Login/Login";
import NuevoEvento from "./eventos/NuevoEvento";
import { Context } from "./Contex";
import { useContext } from "react";
import { Button } from "react-native";
import Eventos from "./eventos/Eventos";

const FirstViews = () => {
    const { usuario } = useContext(Context);
    return (
        <View>
            {!usuario ? (
                <View>
                    <Login />
                </View>
            ) : (
                <Eventos />
                
            )}
        </View>
    );
};
export default FirstViews;
const styles = StyleSheet.create({});
