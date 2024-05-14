import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GoalsForm = ({ setEnteredGoal }) => {
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.formInput}
        onChangeText={goalInputHandler}
      />
      <View style={styles.formButton}>
        <Button
          title="Add Goal"
          onPress={() => console.log("Add goal button pressed")}
          color="#803D3B"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    padding: 10,
  },
  formInput: {
    flex: 3,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  formButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalsForm;
