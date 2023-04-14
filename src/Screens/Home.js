import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";

import CreatePublicationScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import CommentScreen from "./CommentsScreen";
import PostsScreen from "./PostsScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "#FFFFFF",
        },
        labelStyle: {
          display: "none",
        },
        tabBarItemStyle: {
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="bars" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Create Post"
        component={CreatePublicationScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="add-circle" size={32} color={color} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name="person" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen name="Comments" component={CommentScreen} options={commentOptions} /> */}
    </Tabs.Navigator>
  );
};

export default Home;