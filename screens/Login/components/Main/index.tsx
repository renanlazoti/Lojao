import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import  { styles } from "../../css/Styles";
import { useState } from "react";

export default function Main( props:any ) {

    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")

    return (
        <View>
            <TextInput 
                placeholder="Usuário" 
                keyboardType="default" 
                style={styles.caixa} 
                value={usuario} 
                onChangeText={(value) => setUsuario(value)}
            />
            <TextInput
                secureTextEntry
                placeholder="Senha"
                style={styles.caixa}
                value={senha}
                onChangeText={(value) => setSenha(value)}
            />
            <TouchableOpacity onPress={()=> {
                efetuarLogin(usuario,senha)
            }} style={styles.btnTlLogin}>
                <MaterialCommunityIcons name="login" size={24} color="white"/>
                <Text style={styles.txtBtnLogin}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.acao.navigate("Cadastro")} style={styles.btnTlCadastrar}>
                <Feather name="user-plus" size={24} color="white" />
                <Text style={styles.txtBtnCadastro}> Cadastro </Text>
            </TouchableOpacity>
        </View>
    )
}

function efetuarLogin(usuario:any,senha:any){
    if(
    usuario == "" ||
    senha == ""){
        return Alert.alert("Erro","Você deve preencher todos os campos");
    }

    fetch("http://10.26.49.33:8080/api/usuarios/login", {
        method:"POST",
        headers:{
            accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: usuario,
            senha: senha
        })
    })
    .then(response => response.json())
    .then((rs)=>console.log(rs))
    .catch((erro)=>console.log(`Erro -> ${erro}`))
}