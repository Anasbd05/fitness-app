import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { bodyParts } from "../assets/index";

export default function BodyParts() {
  return (
    <View style={tw`mx-4`}>
      <Text style={[tw`font-semibold text-neutral-700 `, { fontSize: hp(3) }]}>
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        renderItem={({ item, index }) => <BodyPartCard item={item} />}
      />
    </View>
  );
}

const BodyPartCard = ({ item, index }: any) => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index + 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/Exercises", params: item })}
        style={[
          tw`flex justify-end py-4 mb-4`,
          { width: wp(44), height: wp(52) },
        ]}
      >
        <Image
          source={item.Image}
          resizeMode="cover"
          style={[tw`rounded-3xl absolute`, { width: wp(44), height: wp(52) }]}
        />
        <LinearGradient
          style={[
            tw`absolute bottom-0 rounded-b-3xl `,
            { width: wp(44), height: hp(15) },
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
        />
        <Text
          style={[
            tw`text-white font-semibold text-center tracking-wide `,
            { fontSize: hp(2.3) },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
