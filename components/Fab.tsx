import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../lib/Colors";

type Props = {
  onPress: () => void;
};

const Fab = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress} style={styles.button}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    zIndex: 998,
  },
  button: {
    position: "absolute",
    bottom: -150,
    alignSelf: "center",
    backgroundColor: Colors.primary,
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    zIndex: 999,
  },
  fabText: {
    fontSize: 32,
    lineHeight: 36,
    padding: 0,
    margin: 0,
    color: Colors.white,
  },
});

export default Fab;
