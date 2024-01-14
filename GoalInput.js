import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ addGoalHandler, visible, onCancel }) {
  const [goalsInput, setGoalsInput] = useState("");

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("./assets/images/goal.png")}
        />
        <TextInput
          style={styles.goalsInput}
          placeholder="Add Goal"
          value={goalsInput}
          onChangeText={(text) => setGoalsInput(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="#f31282"
              onPress={() => {
                onCancel();
                setGoalsInput("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              color="#5e0acc"
              onPress={() => {
                addGoalHandler(goalsInput);
                setGoalsInput("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  goalsInput: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
