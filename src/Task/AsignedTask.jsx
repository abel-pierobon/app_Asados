import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";

const AsignedTask = ({assignedTasks}) => {
    return (
            <FlatList
                    style={styles.flatTask}
                    data={assignedTasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                marginBottom: 2,
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                            <View style={styles.textSorteo}>
                                <Text style={{justifyContent:'space-between',width:'100%'}} >{item.task}</Text>
                            </View>
                        </View>
                    )}
                />
    );
};

export default AsignedTask;

const styles = StyleSheet.create({
    flatTask: {
        padding: 10,
        borderRadius: 4,
        margin: 5,
        marginVertical: 10,
        width: "100%",
        height:'auto',
    },
    textSorteo:{
        width:'50%',
        justifyContent:'space-around'
    }
});
