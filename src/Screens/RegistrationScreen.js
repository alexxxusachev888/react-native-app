import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../utils/Background';

const RegistrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Background >
      <View style={styles.formContainer}>
        <View style={styles.avatarWrapper}>
        <TouchableOpacity onPress={selectImage} style={styles.imageContainer}>
            <Icon name="add" size={25} color="#FF6C00" />
        </TouchableOpacity>
        
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.header}>Registration</Text>
        
        <TextInput
          value={login}
          onChangeText={(text) => setLogin(text)}
          placeholder="Login"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
            <Text style={styles.showButtonText}>Show</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=> navigation.navigate('Home')}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Do you have an account already?{' '}
          <Text style={styles.loginLink} onPress={()=> navigation.navigate('LoginScreen')}>LogIn</Text>
        </Text>
        </KeyboardAvoidingView>
      </View>
    </Background>
    </TouchableWithoutFeedback>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    position:'relative',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    paddingTop: 92,
    width: '100%',
    height: 549, 
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: 32,
  },
  avatarWrapper:{
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{translateX: -60}],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 15,
    right: -15,
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  userImage: {
    width: 10,
    height: 10,
    borderRadius: 50,
    },
  input: {
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#BDBDBD',
    },
  button: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 43,
    },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'center',
    
    },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
    },
  loginLink: {
    color: '#3498DB',
    fontWeight: 'bold',
    },
  passwordInputContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
  showButton: {
      position: 'absolute',
      top: 8,
      right: 15,
      marginLeft: 8,
      padding: 8,
      borderRadius: 4,
    },
  showButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#808080',
    },
});
    
export default RegistrationScreen;


