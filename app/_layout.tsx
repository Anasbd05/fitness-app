import { Stack } from "expo-router";
import { LogBox } from "react-native";

export default function RootLayout() {
  LogBox.ignoreLogs([""]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="ExerciseDetails"
        options={{
          title: "PokemonDetails",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.9, 1],
        }}
      />
    </Stack>
  );
}
