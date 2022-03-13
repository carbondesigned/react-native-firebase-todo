import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../lib/Colors";

type Props = {
  label: string;
  value: string;
  placeholder: string;
  error: string;
  onChangeText?: any;
  autoCompleteType?: any;
  secureTextEntry?: boolean;
};

const Input = ({
  label,
  value,
  placeholder,
  error,
  onChangeText,
  ...props
}: Props) => {
  return (
    <View style={styles.input}>
      <Text style={styles.label}>{label}</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        value={value}
        placeholder={placeholder}
        underlineColorAndroid={"transparent"}
        autoFocus
        onChangeText={onChangeText ? onChangeText : () => {}}
        autoCompleteType={props.autoCompleteType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
    width: "100%",
    paddingVertical: 10,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    paddingBottom: 20,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
});
