import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
export const ExerciseList = ({ item }) => {
  return (
    <Link href={"/exercise"} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Link href={"/exercise"} style={styles.exerciseName}>
          {item.name}
        </Link>
        <Text style={styles.exerciseSubtitle}>
          <Text style={{ textTransform: "capitalize" }}>
            {item.muscle.toUpperCase()}
          </Text>{" "}
          |{" "}
          <Text style={{ textTransform: "capitalize" }}>
            {item.equipment.toUpperCase()}
          </Text>
        </Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    gap: 5,
    marginHorizontal: 10,
    // flexDirection: "column",
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
