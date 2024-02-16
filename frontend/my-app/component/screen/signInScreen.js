import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignInScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // Check if user credentials are correct
    if (userid === '' && password === '') {
      setErrorMessage('Please fill in both Userid and Password.');
    } else if (userid === '') {
      setErrorMessage('Please fill in the Userid.');
    } else if (password === '') {
      setErrorMessage('Please fill in the Password.');
    } else if (userid === 'DYN') {
      if (password === '123') {
        // Navigate to the home screen if both userid and password are correct
        navigation.navigate('HomeScreen');
      } else {
        setErrorMessage('Incorrect Password.');
      }
    } else {
      setErrorMessage('Incorrect Userid or Password.');
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
            style={styles.input}
            onChangeText={setUserid}
            value={userid}
          />
          <Icon name="user" size={20} color="gray" style={styles.icon} />
        </View>
        <View style={styles.inputIcon}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          <Icon name="lock" size={20} color="gray" style={styles.icon} />
        </View>
        {errorMessage !== '' && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
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
    backgroundColor: 'white'
  },
  logo: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.2,
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
    paddingRight: 40,
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
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
});

export default SignInScreen;


// import React, { useState } from 'react';
// import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const SignInScreen = () => {
//   const navigation = useNavigation(); 

//   const [userid, setUserid] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({'userid':userid,'password':password}
//         ), 
//       });

//       // Parse the response
//       console.log('hdddh', userid , password)

//       const data = await response.json();
//       console.log('djsdhjs', data)


//       if (response.ok) {
//         navigation.navigate('HomeScreen');
//       } else {
//         Alert.alert('Error', data.message || 'Sign-in failed');
//       }
//     } catch (error) {
//       console.error('Error signing in:', error);
//       Alert.alert('Error', 'An unexpected error occurred. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/logo.jpeg')}
//         style={styles.logo}
//       />
//       <View style={styles.inputContainer}>
//         <View style={styles.inputIcon}>
//           <TextInput
//             placeholder="Userid"
//             style={styles.input}
//             onChangeText={setUserid}
//             value={userid}
//           />
//           <Icon name="user" size={20} color="gray" style={styles.icon} />
//         </View>
//         <View style={styles.inputIcon}>
//           <TextInput
//             placeholder="Password"
//             secureTextEntry={true}
//             style={styles.input}
//             onChangeText={setPassword}
//             value={password}
//           />
//           <Icon name="lock" size={20} color="gray" style={styles.icon} />
//         </View>
//       </View>
//       <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
//         <Text style={styles.signInText}>Sign In</Text>
//       </TouchableOpacity>
//       <View style={styles.registerContainer}>
//         <Text style={styles.registerText}>Applying for a job? Register here</Text>
//       </View>
//       <View style={styles.linksContainer}>
//         <Text style={styles.linkText}>Terms of Use</Text>
//         <Text style={styles.linkText}>Privacy Policy</Text>
//       </View>
//     </View>
//   );
// };


// const buttonWidth = Dimensions.get('window').width * 0.8; // Adjust the percentage as needed

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor:'white'
//   },
//   logo: {
//     width: Dimensions.get('window').width * 0.8, // Adjust as needed
//     height: Dimensions.get('window').height * 0.2, // Adjust as needed
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   inputIcon: {
//     position: 'relative',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     paddingRight: 40, // To accommodate the icon
//     width: '100%',
//   },
//   icon: {
//     position: 'absolute',
//     top: 12,
//     right: 10,
//     zIndex: 1,
//   },
//   signInButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     width: buttonWidth,
//   },
//   signInText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   registerContainer: {
//     width: buttonWidth,
//   },
//   registerText: {
//     textAlign: 'center',
//   },
//   linksContainer: {
//     flexDirection: 'row',
//   },
//   linkText: {
//     marginRight: 10,
//     color: 'blue',
//   },
// });

// export default SignInScreen;