import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import comments from "../utils/fakeComments";

const renderItem = ({ item }) => (
  <View style={styles.comment}>
    <Image source={item.userAvatarUrl} style={styles.userAvatar} />
    <View style={styles.commentContent}>
      <Text style={styles.commentText}>{item.text}</Text>
      <Text style={styles.commentDate}>
        {item.date} at {item.time}
      </Text>
    </View>
  </View>
);
  
  const CommentScreen = () => {
    const [commentInput, setCommentInput] = useState("");
  
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/comment.png")}
          style={styles.postImage}
        />
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{marginTop: 32, width: '90%'}}
        />
        <View style={styles.leaveComment}>
          <TextInput
            value={commentInput}
            onChangeText={(text) => setCommentInput(text)}
            placeholder="Leave a comment..."
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendButton}>
            <MaterialIcons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff",
    },
    postImage: {
      marginTop: 32,
      width: "90%",
      height: 240,
      borderRadius: 8,
      resizeMode: "cover",
   
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 8,
    },
    comment: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
    },
    commentContent: {
      flex: 1,
    },
    commentText: {
      fontSize: 16,
      marginBottom: 4,
    },
    commentDate: {
      fontSize: 12,
      color: "gray",
    },
    leaveComment: {
      position: 'relative',
      width: '90%',
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    input: {
      flex: 1,
      width: "100%",
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    sendButton: {
      position: 'absolute',
      right: 30,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default CommentScreen;
  