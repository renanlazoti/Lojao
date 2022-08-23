import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "../../css/Styles";
import { useState } from "react";

export default function Main() {

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [cpf,setCpf] = useState("");
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");



    return (

        <ScrollView horizontal={false} style={{flex: 1}}>
            <View>
                <TextInput placeholder="Nome Completo" style={styles.caixa} value={nome} onChangeText={(value)=>setNome(value)}/>
                <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.caixa} value={email} onChangeText={(value)=>setEmail(value)} />
                <TextInput placeholder="CPF" keyboardType="number-pad" style={styles.caixa} value={cpf} onChangeText={(value)=>setCpf(value)} />
                <TextInput placeholder="Usuario" style={styles.caixa} value={usuario} onChangeText={(value)=>setUsuario(value)} />
                <TextInput placeholder="senha" secureTextEntry style={styles.caixa} value={senha} onChangeText={(value)=>setSenha(value)} />

                <TouchableOpacity onPress={() => {
                    efetuarCadastro(nome,email,cpf,usuario,senha)
                }} style={styles.btnTcCadastrar} >
                    <FontAwesome name="save" size={24} color="white" />
                    <Text style={styles.txtBtnCadastro}> Cadastrar </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}

function efetuarCadastro(nome:any,email:any,cpf:any,usuario:any,senha:any){
    if(nome == "" ||
       email == "" ||
       cpf == "" ||
       usuario == "" ||
       senha == ""){
           return Alert.alert("Erro","Você deve preencher todos os campos");
       }

       fetch("http://10.26.49.33:8080/api/usuarios/cadastro", {
           method:"POST",
           headers:{
               accept: "application/json",
               "content-Type": "application/json"
           },
           body: JSON.stringify({
               nomeUsuario: usuario,
               email: email,
               cpf: cpf,
               nomeCompleto: nome,
               senha: senha
           })
       })
       .then(response => response.json())
       .then((rs)=>console.log(rs))
       .catch((erro)=>console.log(`Erro -> ${erro}`))
}