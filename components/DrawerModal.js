import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import {
  UserIcon,
  FilmIcon,
  BookmarkIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
} from "react-native-heroicons/outline";

const DrawerModal = ({ isVisible, toggle, userProfileImg, navigation }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggle}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={{ marginLeft: -18 }} className="bg-black w-5/6 h-screen">
        <View style={{ borderBottomWidth: 1 }} className="p-4 border-gray-800">
          <Image
            source={{
              uri: userProfileImg,
            }}
            className="rounded-full h-12 w-12"
          />
          <View className="py-4">
            <Text className="text-white font-bold text-xl">Joe Biden</Text>
            <Text className="text-xs text-gray-400">joebiden@gmail.com</Text>
          </View>
        </View>
        <View className="p-4 flex-1">
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("Account");
            }}
          >
            <UserIcon size={30} color="#4CAF50" />
            <Text className="text-white text-xl">Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("Preferences");
            }}
          >
            <PencilSquareIcon size={30} color="#4CAF50" />
            <Text className="text-white text-xl">Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("Streaming");
            }}
          >
            <FilmIcon size={30} color="#4CAF50" />
            <Text className="text-white text-xl">Streaming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("WatchlistSetting");
            }}
          >
            <BookmarkIcon size={30} color="#4CAF50" />
            <Text className="text-white text-xl">Watchlist</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mx-4 my-8 bg-red-500 p-4 rounded-full items-center">
          <Text className="text-xl font-bold text-white">LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DrawerModal;
