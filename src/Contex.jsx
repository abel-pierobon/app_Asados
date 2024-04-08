import { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./db/firebase";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [usuario, setUsuario] = useState(false);
    const [error, setError] = useState("");
    const handleChangeInput = (text) => setName(text);
    const handleChangeInputEmail = (text) => setEmail(text);
    const handleChangeInputContraseña = (text) => setContraseña(text);

    const handleAddList = () => {
        if (name.trim() !== "") {
            setList([...list, { id: Math.random().toString(), value: name }]);
            setName("");
        }
    };
    const handleUsuario = async () => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                contraseña
            );
            const user = userCredential.user;
            // console.log("Usuario autenticado con éxito", user);
            setUsuario(true);
            setEmail("");
            setContraseña("");
        } catch (error) {
            // console.error("Error al autenticar el usuario", error);
            setError("Usuario y/o contraseña inválida");
            setTimeout(() => {
                setError("");
            }, 5000);
            console.log({ usuario });
        }
    };
    //handleCerrarSesion
    const handleCerrarSesion = async () => {
        try {
            await signOut(getAuth());
            setUsuario(false);
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }
    };

    return (
        <Provider
            value={{
                name,
                list,
                email,
                contraseña,
                error,
                usuario,
                setList,
                handleChangeInput,
                handleAddList,
                handleChangeInputEmail,
                handleChangeInputContraseña,
                handleUsuario,
                handleCerrarSesion,
            }}
        >
            {props.children}
        </Provider>
    );
};

export { Context, ContextProvider };
