import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";

import * as Animatable from "react-native-animatable";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={300}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email..."
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.reegisterText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },

  containerHeader: {
    marginTop: Platform.OS === "ios" ? "25%" : "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },

  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },

  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 20,
    marginTop: 28,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },

  reegisterText: {
    color: "#a1a1a1",
  },
});
