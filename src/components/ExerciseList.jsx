import { StyleSheet, Text, View } from "react-native";
export const ExerciseList = ({ item }) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={{ textTransform: "capitalize" }}>
          {item.muscle.toUpperCase()}
        </Text>{" "}
        |{" "}
        <Text style={{ textTransform: "capitalize" }}>
          {item.equipment.toUpperCase()}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#000",
    padding: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    // gap: 5,
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
