import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Background from '../utils/Background';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={styles.formContent}>
        <Text style={styles.header}>Login</Text>
        
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
          <Text style={styles.buttonText} onPress={()=> navigation.navigate('Home')}>LogIn</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Don`t have an account?{' '}
          <Text style={styles.loginLink} onPress={()=> navigation.navigate('RegistrationScreen')}>Register</Text>
        </Text>
            </View>
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
  formContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    position:'relative',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    paddingTop: 32,
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
    
export default LoginScreen;