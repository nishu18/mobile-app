import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignInScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Check if user credentials are correct
    if (userid === 'DYN00000000015' && password === 'HRIS@123') {
      // Navigate to the home screen
      navigation.navigate('HomeScreen'); // Navigate to HomeScreen
    } else {
      // Show an alert for incorrect credentials
      Alert.alert('Error', 'Incorrect userid or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpeg')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
          <TextInput
            placeholder="Userid"
            style={styles.input} // Set width to buttonWidth
            onChangeText={setUserid}
            value={userid}
          />
          <Icon name="user" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={styles.inputIcon}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input} // Set width to buttonWidth
            onChangeText={setPassword}
            value={password}
          />
          <Icon name="lock" size={20} color="gray" style={styles.icon} />
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Applying for a job? Register here</Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={styles.linkText}>Terms of Use</Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </View>
    </View>
  );
};

const buttonWidth = Dimensions.get('window').width * 0.8; // Adjust the percentage as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  logo: {
    width: Dimensions.get('window').width * 0.8, // Adjust as needed
    height: Dimensions.get('window').height * 0.2, // Adjust as needed
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'relative',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    paddingRight: 40, // To accommodate the icon
    width: '100%',
  },
  icon: {
    position: 'absolute',
    top: 12,
    right: 10,
    zIndex: 1,
  },
  signInButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: buttonWidth,
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  registerContainer: {
    width: buttonWidth,
  },
  registerText: {
    textAlign: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
  },
  linkText: {
    marginRight: 10,
    color: 'blue',
  },
});

export default SignInScreen;