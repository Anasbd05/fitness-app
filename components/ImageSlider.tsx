import React from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { sliderImages } from "../assets";

export default function ImageSlider() {
  const width = wp(100);

  return (
    <Carousel
      width={width}
      height={hp(35)}
      data={sliderImages}
      autoPlay
      loop
      autoPlayInterval={4000}
      style={{ display: "flex", alignItems: "center" }}
      renderItem={({ item }) => (
        <View
          style={{
            width: width,
            height: hp(28),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item}
            style={{
              width: "90%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 20,
            }}
          />
        </View>
      )}
    />
  );
}
