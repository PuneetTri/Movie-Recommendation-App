import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BookmarkIcon } from "react-native-heroicons/solid";
import RenderStack from "../components/RenderStack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerModal from "../components/DrawerModal";
import axios from "axios";
import { BASE_URL, userId } from "../config/config";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  const [drawerModalVisibility, setDrawerModalVisibility] = useState(false);
  const toggleDrawerVisibility = () => {
    setDrawerModalVisibility(!drawerModalVisibility);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/movie/fetch`, {
          userId: userId,
        });
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View>
        {/* Header */}
        <View className="flex-row items-center p-4 space-x-2">
          <TouchableOpacity onPress={() => toggleDrawerVisibility()}>
            <Image
              source={{
                uri: "https://picsum.photos/200/300",
              }}
              className="rounded-full h-10 w-10"
            />
            <DrawerModal
              isVisible={drawerModalVisibility}
              toggle={toggleDrawerVisibility}
              userProfileImg="https://picsum.photos/200/300"
              navigation={navigation}
            />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-lg font-bold text-white">Hello, Joe 👋</Text>
            <Text className="text-xs text-gray-400">
              Let's find something for you to watch
            </Text>
          </View>
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-full"
            onPress={() => navigation.navigate("Watchlist")}
          >
            <BookmarkIcon size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Body */}
        {data.length > 0 ? (
          <RenderStack data={data} />
        ) : (
          <Text className="text-white">Loading</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
