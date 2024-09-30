import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import categories from './categories.json';

const Header = ({ onSearch, onCategorySelect, onFilterToggle }) => {
  const [searchText, setSearchText] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleFilterToggle = () => {
    const newFilterState = !isFilterActive;
    setIsFilterActive(newFilterState);
    onFilterToggle(newFilterState);
  };

  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <Ionicons name="menu" size={24} color="black" />
        <Image source={{ uri: 'https://img.icons8.com/color/96/000000/hearts.png' }} style={styles.logo} />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      
      <View style={styles.categoryScroll}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => onCategorySelect(category.id)}
          >
            <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity 
          style={[styles.filterButton, isFilterActive && styles.filterButtonActive]}
          onPress={handleFilterToggle}
        >
          <Ionicons name="options-outline" size={24} color={isFilterActive ? "white" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  topBar: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 32,
    height: 32,
  },
  searchContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  filterButtonActive: {
    backgroundColor: 'lightblue',
  },
  categoryScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e3e1d1',
    minWidth: 'screen',
    padding: 10
  },
  categoryItem: {
    backgroundColor: 'white',
    borderRadius: 60,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'red',
    padding: 5
  },
});

export default Header;