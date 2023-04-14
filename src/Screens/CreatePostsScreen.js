import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons  } from "@expo/vector-icons";

const CreatePublicationScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handlePublish = () => {
  };

  const handleDelete = () => {
  };

  return (
    <View style={styles.container}>
        
      <View style={{width: "100%",  alignItems: "center"}}>
      <TouchableOpacity style={styles.imagePlaceholder}>
        <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
        </View>
        <Text style={styles.caption}>Download Image</Text>
      </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: "90%",
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  caption: {
    color: "gray",
    marginTop: 10
  },
  input: {
    width: "90%",
    height: 40,
    color: "#BDBDBD",
    fontSize: 16, 
    fontWeight: 400,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#E8E8E8",
    borderRadius: "none",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  publishButton: {
    width: "90%",
    textAlign: 'center',
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 8,
    marginBottom: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    position: "absolute",
    borderRadius: 20, 
    backgroundColor: '#F6F6F6',
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    bottom: 16,
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',  
    width: 60, 
    height: 60, 
    borderRadius: '100%', 
    alignItems: "center", 
    justifyContent: 'center'
  }
});

export default CreatePublicationScreen;