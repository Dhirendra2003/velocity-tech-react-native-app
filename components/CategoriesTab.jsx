import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import WorkerGrid from './WorkerGrid';
import workers from './workers.json';

const CategoriesTab = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    filterWorkers();
  }, [searchText, selectedCategory]);

  const filterWorkers = () => {
    let filtered = workers.filter(worker => 
      worker.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    if (selectedCategory) {
      filtered = filtered.filter(worker => worker.category === selectedCategory);
    }
    
    setFilteredWorkers(filtered);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchText('');
    console.log('cleared')
  };

  return (
    <View style={styles.container}>
      <Header 
        onSearch={handleSearch} 
        onCategorySelect={handleCategorySelect} 
        onClearFilters={handleClearFilters}
        filterState={selectedCategory}
        searchText={searchText}
      />
      <WorkerGrid workers={filteredWorkers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CategoriesTab;