import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../lib/Colors";

type Props = {
  onPress: () => void;
  children: ReactNode;
};

const SaveButton = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  button: {
    width: "95%",
    height: 50,
    backgroundColor: Colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
