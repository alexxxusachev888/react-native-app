import { View, Text, Image } from "react-native";

const Publications = ()=> {
  return (
  <View style={{backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 20, marginBottom: 32 }}>
  <Image 
    source={require("../../assets/images/profile.png")} 
    style={{ width: 40, height: 40, borderRadius: 8}} />
  <View style={{ marginLeft: 8 }}>
  <Text style={{ fontWeight: "bold" }}>Natalia Romanova</Text>
    <Text>email@example.com</Text>
  </View>
</View>
  );
}

export default Publications;