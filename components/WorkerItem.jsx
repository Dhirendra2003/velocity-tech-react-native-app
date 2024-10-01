import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const WorkerItem = ({ worker }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: worker.countryFlag }} style={styles.flag} />
      <Image source={{ uri: worker.profileImage }} style={styles.image} />
      <Text style={styles.name}>{worker.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom:-30

  },
  image: {
    maxWidth: 90,
    maxHeight: 90,
    minWidth:60,
    minHeight:60,
    borderRadius: 50,
    marginBottom: 10,
    borderColor:'grey',
    borderWidth:1 ,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flag: {
    width: 30,
    height: 30,
    padding:5,
    borderColor:'black',
    borderWidth:1 ,
    borderRadius:20,
    position:'relative',
    left:30,
    top:30,
    zIndex:20
  },
});

export default WorkerItem;