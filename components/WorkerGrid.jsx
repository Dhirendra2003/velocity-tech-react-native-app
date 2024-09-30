import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import WorkerItem from './WorkerItem';

const { width } = Dimensions.get('window');
const numColumns = 4;
const itemWidth = width / numColumns;

const WorkerGrid = ({ workers }) => {
  const renderItem = ({ item }) => (
    <WorkerItem worker={item} width={10} />
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    padding: 5,
    paddingBottom:50
  },
});

export default WorkerGrid;