import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import BodyParts from "../components/BodyParts";
import ImageSlider from "../components/ImageSlider";

export default function home() {
  return (
    <SafeAreaView edges={["top"]} style={tw`flex-1 bg-white flex gap-y-5 `}>
      <StatusBar style="dark" />
      {/* avatar */}
      <View style={tw`flex-row justify-between  items-center m-5`}>
        <View style={tw`space-y-2`}>
          <Text
            style={[
              tw`font-bold tracking-wider text-neutral-700`,
              { fontSize: hp(4.5) },
            ]}
          >
            Ready to
          </Text>
          <Text
            style={[
              tw`font-bold tracking-wider text-rose-500`,
              { fontSize: hp(4.5) },
            ]}
          >
            WORKOUT
          </Text>
        </View>
        <View style={tw` flex justify-center items-center gap-y-2 `}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={[tw`rounded-full`, { height: hp(6), width: hp(6) }]}
          />
          <View
            style={[
              tw`bg-neutral-200 rounded-full flex justify-center items-center border-1.5 border-neutral-300 `,
              { height: hp(5.5), width: hp(5.5) },
            ]}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* image slider */}

      <ScrollView>
        <View>
          <ImageSlider />
        </View>

        <View style={tw`flex-1 `}>
          <BodyParts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
