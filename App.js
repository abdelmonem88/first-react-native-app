import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import GoalsForm from "./components/GoalsForm";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    console.log("enteredGoal:", enteredGoal);
    console.log("goals:", goals);
  }, [enteredGoal, goals]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GoalsForm
        enteredGoal={enteredGoal}
        setEnteredGoal={setEnteredGoal}
        setGoals={setGoals}
      />
      <GoalsList goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4C59E",
  },
});
