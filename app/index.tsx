import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import tw from "twrnc";

export default function Index() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 justify-end flex`}>
      <StatusBar />
      <Image
        style={tw`h-full w-full absolute`}
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={[
          tw`flex justify-end gap-y-8 pb-12`,
          {
            width: wp(100),
            height: hp(70),
          },
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          // exiting={FadeOut}
          style={tw`flex items-center`}
        >
          <Text
            style={[
              tw`text-white font-bold tracking-wide  `,
              {
                fontSize: hp(5),
              },
            ]}
          >
            Best
            <Text style={tw`text-rose-500`}> Workouts</Text>
          </Text>
          <Text
            style={[
              tw`text-white font-bold tracking-wide  `,
              {
                fontSize: hp(5),
              },
            ]}
          >
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={[
              tw`bg-rose-500 flex items-center mb-4 justify-center mx-auto rounded-full border-2 border-neutral-200 `,
              { height: hp(7), width: wp(80) },
            ]}
          >
            <Text
              style={[
                tw`text-white font-bold tracking-widest `,
                { fontSize: hp(3) },
              ]}
            >
              Get started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
