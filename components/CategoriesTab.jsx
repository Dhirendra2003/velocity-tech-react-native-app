import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import WorkerGrid from './WorkerGrid';
import workers from './workers.json';

const CategoriesTab = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    filterWorkers();
  }, [searchText, selectedCategory, isFilterActive]);

  const filterWorkers = () => {
    let filtered = workers;
    
    if (isFilterActive) {
      if (selectedCategory) {
        filtered = filtered.filter(worker => worker.category === selectedCategory);
      }
      
      if (searchText) {
        filtered = filtered.filter(worker => 
          worker.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    }
    
    setFilteredWorkers(filtered);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleFilterToggle = (isActive) => {
    setIsFilterActive(isActive);
  };

  return (
    <View style={styles.container}>
      <Header 
        onSearch={handleSearch} 
        onCategorySelect={handleCategorySelect} 
        onFilterToggle={handleFilterToggle}
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