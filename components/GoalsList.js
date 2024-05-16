import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

const GoalsList = ({ goals, setGoals }) => {
  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <Pressable
            onPress={() => removeGoalHandler(itemData.item.id)}
            android_ripple={{
              color: "#803D3B",
            }}
          >
            <View style={styles.listItem}>
              <Text style={styles.itemtext}>{itemData.item.text}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  listItem: {
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  itemtext: {
    padding: 10,
  },
});
