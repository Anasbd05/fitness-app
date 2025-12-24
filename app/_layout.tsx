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
    </Stack>
  );
}
