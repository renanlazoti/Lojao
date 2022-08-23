import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:20,
        margin: 10,
        fontWeight: "bold"
    },

    caixa: {
        width: 300,
        padding: 10,
        margin: 5,
        backgroundColor: "#424242",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    btnTlLogin:{
        flexDirection: "row",
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: "#e53935",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 15,
        height: 35
    },

    txtBtnLogin:{
        color: "white",
        fontWeight: "bold"
    },

    btnTlCadastrar:{
        flexDirection: "row",
        marginBottom: 30,
        backgroundColor: "#e53935",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 15,
        height: 35
    },

    txtBtnCadastro:{
        color: "white",
        fontWeight: "bold"
    },
})