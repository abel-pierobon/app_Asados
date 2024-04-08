import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Context } from "../Contex";
import { Button } from "react-native";
const Login = () => {
    const {
        email,
        contraseña,
        handleChangeInputEmail,
        handleChangeInputContraseña,
        handleUsuario,
        error,
        usuario
    } = useContext(Context);
    return (
        <View>
            <Text style={{ textTransform: "uppercase" }}>Iniciar Sesion</Text>
            <Text style={{ color: "red" }}>{error}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={handleChangeInputEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"                
            ></TextInput>
            <TextInput
                style={styles.textInput}
                onChangeText={handleChangeInputContraseña}
                value={contraseña}
                secureTextEntry
                placeholder="Contraseña"
                type='password'
            ></TextInput>
            <Button
                title="Iniciar"
                color="#2196F3"
                onPress={() => handleUsuario(email, contraseña)}
            />
            {usuario ? (<Text>{usuario}</Text>):( <Text>No hay usuario</Text>)}
        </View>
    );
};
export default Login;
const styles = StyleSheet.create({
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
