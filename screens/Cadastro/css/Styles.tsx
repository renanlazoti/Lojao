import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cadastro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:20,
        margin: 10
    },

    caixa:{
        width: 300,
        padding: 10,
        margin: 5,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1
    },

    btnTcCadastrar:{
        flexDirection: "row",
        backgroundColor: "#999999",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: 150,
    }
})