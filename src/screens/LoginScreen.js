import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import styles from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const { data } = await api.post("/auth/login", { email, password });
      await AsyncStorage.setItem("token", data.token);
      navigation.navigate("Tasks");
    } catch (error) {
      alert(`Erro ao logar: ${error.response?.data?.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

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

      <Button text="Entrar" onPress={handleLogin} textColor="#FFFFFF" />

      <Text style={styles.footerText}>
        Ainda não possui uma conta?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Register")}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}
