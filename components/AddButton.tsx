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
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name="add" size={28} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default AddButton;
