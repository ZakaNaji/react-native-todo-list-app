import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setListOfGoals((prev) => [...prev, goal]);
    setModalIsVisible(false);
  };
  const deleteGoalHandler = (deletedGoal) =>
    setListOfGoals((prev) => prev.filter((goal, i) => goal !== deletedGoal));
  const onCancel = () => setModalIsVisible(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={() => setModalIsVisible(true)}
          color="#5e0acc"
        />
        <GoalInput
          visible={modalIsVisible}
          addGoalHandler={addGoalHandler}
          onCancel={onCancel}
        />
        <View style={styles.body}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => (
              <GoalItem
                goal={itemData.item}
                index={itemData.index}
                onDelete={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },

  body: {
    flex: 5,
    marginTop: 20,
  },
});
