import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalsForm from "./components/GoalsForm";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={() => setIsModalVisible(true)}
          color={"#803D3B"}
        />
        <GoalsForm
          enteredGoal={enteredGoal}
          setEnteredGoal={setEnteredGoal}
          setGoals={setGoals}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <GoalsList goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
