import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styles from "../../styles/styles";

const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    placeholderTextColor = "#B0B0B0",
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = "default",
    style = {},
  } = props;

  return (
    <TextInput
      ref={ref}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
});

export default Input;
