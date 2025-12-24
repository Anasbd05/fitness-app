import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import tw from "twrnc";
export default function ExerciseDetails() {
  const item = useLocalSearchParams();

  const router = useRouter();

  return (
    <View style={tw`flex flex-1`}>
      <View style={tw`shadow-md bg-neutral-200 rounded-b-3xl `}>
        <Image
          source={require("../assets/images/exercice.png")}
          contentFit="cover"
          style={[tw`rounded-3xl`, { width: wp(100), height: wp(100) }]}
        />
      </View>
      <TouchableOpacity
        style={tw`mx-2 absolute rounded-full mt-2 right-0`}
        onPress={() => router.back()}
      >
        <Ionicons
          name="close-circle"
          size={heightPercentageToDP(4.5)}
          color="#f43f5d"
        />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        style={tw`mx-4 gap-y-2 mt-3`}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={[
            { fontSize: heightPercentageToDP(3.5) },
            tw`font-semibold text-neutral-700 tracking-wide`,
          ]}
        >
          {item.name}
        </Animated.Text>
        <Text
          style={[
            { fontSize: heightPercentageToDP(2) },
            tw` text-neutral-700 tracking-wide`,
          ]}
        >
          Equipement{" "}
          <Text style={[tw` text-neutral-800 font-bold`]}>
            {item.equipment}
          </Text>
        </Text>
        <Text
          style={[
            { fontSize: heightPercentageToDP(2) },
            tw` text-neutral-700 tracking-wide `,
          ]}
        >
          Secondary Muscles{" "}
          <Text style={[tw` text-neutral-800 mx-1 font-bold`]}>
            {item.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={[
            { fontSize: heightPercentageToDP(2) },
            tw` text-neutral-700 tracking-wide `,
          ]}
        >
          Target{" "}
          <Text style={[tw` text-neutral-800 mx-1 font-bold`]}>
            {item.target}
          </Text>
        </Text>
        <Text
          style={[
            { fontSize: heightPercentageToDP(3) },
            tw` text-neutral-700 tracking-wide `,
          ]}
        >
          Instratuctions:{" "}
          <Text style={[tw` text-neutral-800 mx-1 font-bold`]}>
            {item.instructions.split(",").map((instra, index) => (
              <Text key={index} style={tw`text-neutral-800 text-sm `}>
                {instra}
              </Text>
            ))}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}
