import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Header Component
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('../../assets/comp.jpeg')} />
        <View style={styles.textContainer}>
          <Image style={styles.logo1} source={require('../../assets/logo.png')} />
          <Image style={styles.logo1} source={require('../../assets/help.jpeg')} />
        </View>
      </View>
    );
  };

  // SearchBar Component
  const SearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#7f8c8d" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Employee Name and Employee ID"
            placeholderTextColor="#7f8c8d"
          />
        </View>
      </View>
    );
  };

  // MessageBox Component
  const MessageBox = ({ message }) => {
    return (
      <View style={styles.messageBox}>
        <View style={styles.messageText}>
          <Text style={styles.messageText1}>Diwali message from GCOO's Desk</Text>
          <Text style={styles.messageText2}>Posted on: 12 Jan 2024</Text>
        </View>
      </View>
    );
  };

  // IconBox Component
  const IconBox = ({ icon, title }) => {
    const handlePress = () => {
      if (title === "Timeline") {
        navigation.navigate('Timeline'); // Navigate to Timeline screen
      } else {
        // Handle navigation for other screens if needed
      }
    };

    return (
      <View style={styles.iconContainer}>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={handlePress}>
            <Image style={styles.icon} source={icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.iconText}>{title}</Text>
      </View>
    );
  };

  // Footer Component
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.poweredByText}>Powered by</Text>
        <Image style={styles.footerLogo} source={require('../../assets/comp.jpeg')} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <SearchBar />
          <MessageBox />
          <View style={styles.iconBoxContainer}>
            <IconBox icon={require('../../assets/telegramicon.png')} title="Timeline" />
            <IconBox icon={require('../../assets/attendance.png')} title="Attendance" />
            <IconBox icon={require('../../assets/hr.jpeg')} title="HR Document" />
            <IconBox icon={require('../../assets/events.jpeg')} title="event" />
            <IconBox icon={require('../../assets/compensation.jpeg')} title="compensation" />
            <IconBox icon={require('../../assets/calendar.jpeg')} title="Calendar" />
            <IconBox icon={require('../../assets/benefit.jpeg')} title="Benefit" />
            <IconBox icon={require('../../assets/employee.png')} title="Employee" />
            <IconBox icon={require('../../assets/feedback.png')} title="Feedback" />
            <IconBox icon={require('../../assets/analytics.jpeg')} title="Analytics" />
            <IconBox icon={require('../../assets/leave.png')} title="Leave" />
            <IconBox icon={require('../../assets/performance.jpeg')} title="Performance" />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: 'white',
  },
  logo: {
    width: 70,
    height: 40,
    marginRight: 10,
  },
  logo1: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  searchBarContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 5,
  },
  messageBox: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    borderRadius: 5,
  },
  messageText: {
    backgroundColor: 'white',
    height: 70,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 10,
  },
  messageText1: {
    padding: 10,
  },
  messageText2: {
    padding: 10,
  },
  iconBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  iconContainer: {
    width: '30%',
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  iconBox: {
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  poweredByText: {
    fontSize: 12,
    color: 'gray',
  },
  footerLogo: {
    marginTop: 2,
    width: 80,
    height: 30,
  },
});

export default HomeScreen;
