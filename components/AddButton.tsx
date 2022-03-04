import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../lib/Colors";

type Props = {
  onPress: () => void;
};

const AddButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Ionicons
        name="add"
        size={24}
        color={Colors.white}
        style={{ padding: 4, margin: 0, width: 32, height: 32 }}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    // width: 32,
    // height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginRight: 10,
  },
  fabText: {
    fontSize: 18,
    lineHeight: 24,
    padding: 0,
    margin: 0,
    color: Colors.white,
  },
});
