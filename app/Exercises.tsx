import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import tw from "twrnc";

export default function Exercises() {
  const router = useRouter();

  const [exercice, setExercice] = useState([]);
  const item = useLocalSearchParams();

  //   const fetchExercice = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://exercisedb.p.rapidapi.com/exercises/targetList",
  //       headers: {
  //         "x-rapidapi-key": "8cde7de499msh9886fdc96435e68p15bd6fjsnfef09ee74337",
  //         "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       const data = response.data;
  //       setExercice(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchExercice();
  //   }, []);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.Image}
        style={[
          {
            width: wp(100),
            height: hp(45),
          },
          tw`rounded-b-3xl`,
        ]}
      />
      <TouchableOpacity
        onPress={() => router.push("/home")}
        style={[
          tw`bg-rose-500 mx-4 absolute flex items-center justify-center pr-1 rounded-full`,
          {
            height: hp(5.5),
            width: hp(5.5),
            marginTop: hp(7),
          },
        ]}
      >
        <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>

      <View style={tw` mx-4  gap-y-3 mt-4 `}>
        <Text
          style={[tw`font-semibold text-neutral-700 `, { fontSize: hp(3) }]}
        >
          {item.name} exercises
        </Text>
        <View style={tw`mb-10`}></View>
      </View>
    </ScrollView>
  );
}
