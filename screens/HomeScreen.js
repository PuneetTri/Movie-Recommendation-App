import { View, Text, TouchableOpacity, Image, onLayout } from "react-native";
import React, { useLayoutEffect } from "react";
import { BookmarkIcon } from "react-native-heroicons/solid";
import RenderStack from "../components/RenderStack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  DATA = [
    {
      id: 1,
      name: "Django Unchained",
      description:
        "When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
      link: "https://www.primevideo.com/dp/amzn1.dv.gti.36ad127e-c020-4ba8-0e01-cf6654ca8e34?autoplay=0&ref_=atv_cf_strg_wb",
    },
    {
      id: 2,
      name: "Lagaan",
      description:
        "During the British Raj, a farmer named Bhuvan accepts the challenge of Captain Andrew Russell to beat his team in a game of cricket and enable his village to not pay taxes for the next three years.",
      posterImg:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91ZWAeRiIVS._SL1500_.jpg",
      link: "https://www.netflix.com/in/title/60020906?source=35",
    },
    {
      id: 3,
      name: "Qala",
      description:
        "Haunted by her past, a talented singer with a rising career copes with the pressure of success, a mother's disdain and the voices of doubt within her.",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BYzg4ZGU4ZTItNDI0ZC00MDdkLTk0ZDUtZjhjYWQ5OWFlNTg1XkEyXkFqcGdeQXVyMTU2NDkwOTAw._V1_FMjpg_UX1000_.jpg",
      link: "https://www.netflix.com/in/title/81423081",
    },
    {
      id: 4,
      name: "Gangs of Wasseypur",
      description:
        "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg",
      link: "https://www.primevideo.com/detail/Gangs-of-Wasseypur-Part-1/0P0WX3CRD66D2TQEJC4XNRGWHC",
    },
    {
      id: 5,
      name: "Yashoda",
      description:
        "Surrogate mother Yashodha is advised to follow a few guidelines to keep herself and her baby healthy and safe, but something happens at the surrogate centre that puts both of them at risk.",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BZWIwOTdiYjQtOTcwZS00OWE3LWI4ZGYtMDcwMTgxMWIzOTI1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      link: "https://www.primevideo.com/dp/amzn1.dv.gti.0501dc6d-0cef-42f2-8d9d-c18dfd4f4781?autoplay=0&ref_=atv_cf_strg_wb",
    },
    {
      id: 6,
      name: "Chhello Show",
      description:
        "When the magic of movies conquers nine-year-old Samay's heart, he moves heaven and Earth in pursuit of his 35mm dreams. However, he is unaware of heartbreaking times that await him.",
      posterImg:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/9/2022_9$largeimg_160792675.jpg",
      link: "https://www.netflix.com/in/title/81496006?source=35",
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View>
        {/* Header */}
        <View className="flex-row items-center p-4 space-x-2">
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://picsum.photos/200/300",
              }}
              className="rounded-full h-10 w-10"
            />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-lg font-bold text-white">Hello, Joe 👋</Text>
            <Text className="text-xs text-gray-400">
              Let's find something for you to watch
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Watchlist")}>
            <BookmarkIcon size={30} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <RenderStack data={DATA} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;