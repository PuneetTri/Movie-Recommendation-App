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
      <View style={{ marginLeft: -18 }} className="bg-black w-5/6 h-screen p-4">
        <View>
          <Image
            source={{
              uri: userProfileImg,
            }}
            className="rounded-full h-12 w-12"
          />
          <View
            style={{ borderBottomWidth: 1 }}
            className="py-4 border-gray-400"
          >
            <Text className="text-white font-bold text-xl">Joe Biden</Text>
            <Text className="text-xs text-gray-400">joebiden@gmail.com</Text>
          </View>
        </View>
        <View className="my-8">
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("Account");
            }}
          >
            <UserIcon size={30} color="white" />
            <Text className="text-white text-2xl">Account</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-4 my-4">
            <PencilSquareIcon size={30} color="white" />
            <Text className="text-white text-2xl">Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("Streaming");
            }}
          >
            <FilmIcon size={30} color="white" />
            <Text className="text-white text-2xl">Streaming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center space-x-4 my-4"
            onPress={() => {
              toggle();
              navigation.navigate("WatchlistSetting");
            }}
          >
            <BookmarkIcon size={30} color="white" />
            <Text className="text-white text-2xl">Watchlist</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-4 my-4">
            <ArrowLeftOnRectangleIcon size={30} color="rgb(239,68,68)" />
            <Text className="text-red-500 text-2xl">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DrawerModal;
