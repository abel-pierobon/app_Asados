import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PaidAdmin = () => {
    return (
        <View style={styles.container}>
            <Text>PaidAdmin</Text>
        </View>
    );
};

export default PaidAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 30,
    },
});
