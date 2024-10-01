import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import categories from './categories.json';

const Header = ({ onSearch, onCategorySelect, onClearFilters, filterState }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleClearFilters = () => {
    onClearFilters();
    setSearchText('');
  };

  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <Ionicons name="menu" size={24} color="black" />
        <Image source={{ uri: 'https://scontent.fnag4-1.fna.fbcdn.net/v/t39.30808-1/302532542_202456052135818_4484211575290958857_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=r80MdnySARUQ7kNvgEn21o5&_nc_ht=scontent.fnag4-1.fna&_nc_gid=AKOSjEeuI151bcCPDzW0EcC&oh=00_AYDH5IQaWobCFbPVcvu4Crk9CJtadLYaReT_VEEP_F6XYQ&oe=6700B3ED' }} style={styles.logo} />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View style={styles.categoryScroll}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => {
              onCategorySelect(category.id);
              //  console.log(filterState)
            }}
          >
            <Image source={{ uri: category.icon }} style={[styles.categoryIcon,filterState===category.id && styles.selectedCategory ]} />
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
          style={styles.filterButton}
          onPress={handleClearFilters}
        >
          <Ionicons name={(filterState || searchText) ? "close-circle-outline" : "options-outline"} size={24} color="black" />
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
    width: 100,
    height: 32,
    marginLeft:20,
    marginRight:'auto'
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
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
  },
  selectedCategory:{
    width: 70,
    height:70,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'red',
    padding: 5,
    backgroundColor:'white',
    elevation:5
  }
});

export default Header;