import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/styles";

const Button = ({ text, onPress, textColor = "#FFFFFF" }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
