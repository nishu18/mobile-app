import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'; // Import TextInput
import { FontAwesome } from '@expo/vector-icons';

const Timeline = ({ onClose }) => {
  const [newsVisible, setNewsVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleToggleNews = () => {
    setNewsVisible(!newsVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timeline</Text>
      <ScrollView>
      {/* First Box */}
      <View style={[styles.box, styles.firstBox]}>
        <TextInput
          style={[styles.inputBox, { height: 80 }]}
          placeholder="Write something..."
          value={inputText}
          onChangeText={setInputText}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Second Box */}
      <View style={[styles.box, styles.secondBox]}>
        <View style={styles.userContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.userIcon} />
          <View style={styles.userInfo}>
            <Text>User Name</Text>
            <Text>Date</Text>
          </View>
        </View>
        <Text>Sample text</Text>
        <View style={styles.interactionContainer}>
          <FontAwesome name="heart" size={20} color="black" />
          <Text>10 Likes</Text>
        </View>
        <View style={styles.commentContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.commentIcon} />
          <TextInput style={styles.commentInput} placeholder="Write a comment" />
          <TouchableOpacity style={styles.commentButton}>
            <Text style={styles.commentButtonText}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Third Box */}
      <View style={[styles.box, styles.thirdBox]}>
  <View style={styles.newsContainer}>
    <FontAwesome name="newspaper-o" size={24} color="black" />
  </View>
  <View style={{ display: 'flex', flexDirection: 'row', gap:40 }}>
  <Text style={styles.boxTitle}>News and Announcements</Text>

<TouchableOpacity style={styles.collapseButton} onPress={handleToggleNews}>
  <Text style={styles.collapseButtonText}>{newsVisible ? '-' : '+'}</Text>
</TouchableOpacity></View>
  
  {newsVisible && (
    <Text style={styles.newsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</Text>
  )}
</View>
 </ScrollView>

      {/* Close Button */}
      {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', // Container background color
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
    textAlign: 'center',
  },
  box: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'darkgray', // Border color for all boxes
    backgroundColor: 'white', // Default background color for boxes
  },
  firstBox: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  secondBox: {
    borderBottomWidth: 0, // Remove bottom border for the second box
  },
  thirdBox: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '29%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  interactionContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 8,
    alignItems: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  commentButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  commentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  collapseButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  collapseButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  newsText: {
    marginTop: 10,
  },
});

export default Timeline;
