import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ goal, index, onDelete }) {
  return (
    <Pressable onPress={() => onDelete(goal)}>
      <View style={styles.goalsItem}>
        <Text style={styles.goalText} key={index}>
          {goal}
        </Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalsItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
    padding: 8,
  },
});
