import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Size({ navigation }) {

  const [newsData, setNewsData] = useState([
    { id: '1', title: 'Até 1 kg 📦' },
    { id: '2', title: 'Até 5 kg 📦' },
    { id: '3', title: 'Até 10 kg 📦' },
    { id: '4', title: 'Até 20 kg📦' },
    { id: '5', title: 'Outro 📦' },
    
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxPress = (id) => {
    setSelectedOption(id === selectedOption ? null : id);
  };

  const handleAvancarPress = () => {
    if (selectedOption) {
      navigation.navigate('Price');
    }
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.newsItem,
        { backgroundColor: item.id === selectedOption ? '#add8e6' : 'white' },
      ]}
      onPress={() => handleCheckboxPress(item.id)}
    >
      <Text style={styles.newsTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
      />

      <Button
        title="Avançar"
        onPress={handleAvancarPress}
        disabled={!selectedOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  newsItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    paddingBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});