import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Text,
  Image,
} from "react-native";

const GoalsForm = ({
  enteredGoal,
  setEnteredGoal,
  setGoals,
  isModalVisible,
  setIsModalVisible,
}) => {
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoal },
    ]);
    setEnteredGoal("");
    setIsModalVisible(false);
  };

  const dismissModalHandler = () => {
    setEnteredGoal("");
    setIsModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.formContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.formImage}
        />
        <TextInput
          placeholder="Enter your goal"
          style={styles.formInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.formButtons}>
          <Pressable style={styles.formButton} onPress={addGoalHandler}>
            <Text>Add Goal</Text>
          </Pressable>
          <Pressable style={styles.formButton} onPress={dismissModalHandler}>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#803D3B",
  },
  formImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  formInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  formButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  formButton: {
    width: "20%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4C59E",
    borderRadius: 5,
  },
});

export default GoalsForm;
