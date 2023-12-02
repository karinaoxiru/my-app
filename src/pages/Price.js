import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Slider, Icon } from '@rneui/themed';


const Sliders = () => {
  const [value, setValue] = useState(0);

  const interpolate = (start, end) => {
    let k = value  / 1000; 
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <View style={styles.contentView}>
      <Text style={styles.subHeader}>Definir um preço minimo de deslocamento?</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={1000}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={color()}
            />
          ),
        }}
      />
      <Text style={{ paddingTop: 20 }}>R$: {value}</Text>
      <Text style={{ specificPriceText: 10 }}>Clique no valor acima para um preço mais específico</Text>

    </View>
  );
};

const YourComponent = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const newsData = data;

  const handleCheckboxPress = (id) => {
    setSelectedOption(id);
  };

  const handleAvancarPress = () => {
    if (selectedOption) {
      navigation.navigate('Done');
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
  <TouchableOpacity onPress={() => navigation.navigate('Done')}>
              <Text style={styles.buttonPrice}>Avançar</Text>
            </TouchableOpacity>

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
      />

  
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  specificPriceText: {
    paddingTop: 10,
    textAlign: 'center'
  },
  subHeader: {
    background: 'black',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
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

export { Sliders, YourComponent };
