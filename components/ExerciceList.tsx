import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";

import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function ExerciceList({ data }: any) {
  return (
    <ScrollView>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <ExerciceCard item={item} index={index} />
        )}
      />
    </ScrollView>
  );
}

const ExerciceCard = ({ item, index }: any) => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index + 200)
        .springify()}
      key={index}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/ExerciseDetails", params: item })
        }
        style={tw`flex py-3 gap-y-2 `}
      >
        <View style={tw`bg-neutral-200 shadow rounded-2xl`}>
          <Image
            source={require("../assets/images/exercice.png")}
            contentFit="cover"
            style={[tw`rounded-3xl`, { width: wp(44), height: wp(52) }]}
          />
        </View>
        <Text
          style={[
            tw`text-neutral-700 font-semibold ml-1 tracking-wide`,
            { fontSize: heightPercentageToDP(1.7) },
          ]}
        >
          {item.name.length > 20 ? item.name.slice(0.2) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
