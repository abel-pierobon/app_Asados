import { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { Context } from "../Contex";
import Name from "../Task/Name";
import { Button } from "react-native-web";

const Participantes = () => {
    const { list } = useContext(Context);
    return (
        <View>
            <Text>Participantes</Text>
            <Name />
            <View style={styles.container}>
                {list.length > 0 ? (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "85%",
                            backgroundColor: "powderblue",
                        }}
                    >
                        <FlatList
                            style={{ flex: 1, padding:2,margin:5 }}
                            data={list}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        justifyContent: "space-",
                                        alignContent:'center',
                                        width: "85%",
                                        backgroundColor: "powderblue",
                                        padding:2,
                                        margin:5                                       
                                    }}
                                >
                                    <View style={{flex:1, justifyContent:'center'}}>
                                        <Text
                                            style={{ textTransform: "uppercase" }}
                                        >
                                            {item.value}
                                        </Text>
                                    </View>
                                    <View style={{ margin: 5 }}>
                                        <Button title="!" color="#3cb371" />
                                    </View>
                                    <View style={{ margin: 5 }}>
                                        <Button title="x" color="#dc143c" />
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                ) : (
                    <Text> sin participantes</Text>
                )}
            </View>
        </View>
    );
};
export default Participantes;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 10,
        paddingTop: 30,
    },
});
