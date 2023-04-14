import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { MaterialIcons, Ionicons, Entypo  } from "@expo/vector-icons";
import Background from "../utils/Background";
import posts from "../utils/fakePosts";

const renderItem = ({ item }) => (
  <View style={styles.post}>
    <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
    <Text style={styles.postCaption}>{item.caption}</Text>
    <View style={styles.postActions}>
      <View style={styles.action}>
        <MaterialIcons name="comment" size={24} color="#FF6C00" />
        <Text>{item.commentsCount}</Text>
      </View>
      <View style={styles.action}>
        <Ionicons name="heart-outline" size={24} color="#FF6C00" />
        <Text>{item.likesCount}</Text>
      </View>
      <View style={styles.action}>
        <Ionicons name="location-outline" size={24} color="#FF6C00" />
        <Text>{item.locationDescription}</Text>
      </View>
    </View>
  </View>
);

const ProfileScreen = () => {
  return (
    <Background>
    <View style={styles.container}>
        <View style={styles.avatarWrapper}>      
            <Image source={require('../../assets/images/profile.png')} style={styles.userImage} /> 
            <View style={{position: 'absolute', bottom: -10, right: -10}}>
                <Entypo name="circle-with-cross" size={24} color="#BDBDBD" />   
            </View> 
        </View>
        <Text style={styles.title}>Natalia Romanova</Text>
        <View style={{position: "absolute", top: 20, right: 20}}>
            <Ionicons name="md-exit-outline" size={24} color="#BDBDBD" />
        </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 103,
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 92,
    marginBottom: 32,
  },
  list: {
    backgroundColor: "#FFFFFF",
    width: 300,
    paddingLeft: 25
  },
  avatarWrapper:{
    marginBottom: 50,
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{translateX: -60}],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  post: {
    width: '90%',
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 8,
  },
  postCaption: {
    fontSize: 16,
    marginBottom: 8,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileScreen;