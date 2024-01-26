import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from "../assets/data/exercises.json";
export default function ExerciseScreen() {
  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 10, gap: 10 }}>
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.title}>
        <Text>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={{ textTransform: "capitalize" }}>
            {exercise.muscle.toUpperCase()}
          </Text>{" "}
          |{" "}
          <Text style={{ textTransform: "capitalize" }}>
            {exercise.equipment.toUpperCase()}
          </Text>
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    // gap: 5,
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  title: {
    padding: 10,
    borderRadius: 10,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 25,
  },
});
