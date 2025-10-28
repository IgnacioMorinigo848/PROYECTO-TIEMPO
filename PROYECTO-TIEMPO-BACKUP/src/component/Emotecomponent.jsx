import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const EmoteComponent = ({ onPress, emoteImage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <Image style={styles.emote} source={emoteImage} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
  position: "absolute",
  bottom: 0,
  alignSelf: "center",
  width: 70,
  height: 70,
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999, // <-- Esto lo pone por encima del modal
},
  content: {
    width: 70,
    height: 70,
    backgroundColor: "#994EAC",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  emote: {
    width: "70%",
    height: "70%",
  },
});

export default EmoteComponent;
