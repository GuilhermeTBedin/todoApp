import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import api from "../services/api";
import styles from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";

export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !user || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      await api.post("/auth/register", {
        email,
        user,
        password,
      });
      Alert.alert("Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(`Erro ao cadastrar: ${error.response?.data?.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <Input
        placeholder="Nome de usuário"
        value={user}
        onChangeText={setUser}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button text="Cadastrar" onPress={handleRegister} textColor="#FFFFFF" />

      <Text style={styles.footerText}>
        Já possui uma conta?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Faça Login
        </Text>
      </Text>
    </View>
  );
}
