import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  onPress: (color: string) => void;
  selected: boolean;
  color: string;
  selectedColor: string;
};

const ColorButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.color)}
      style={[
        styles.button,
        {
          backgroundColor: props.color,
          borderColor:
            props.selected && props.color === props.selectedColor
              ? "#0077ff"
              : "#d6d6d6",
          borderWidth:
            props.selected && props.color === props.selectedColor ? 4 : 1,
        },
      ]}
    ></TouchableOpacity>
  );
};

export default ColorButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 48,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
