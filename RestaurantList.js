import React from 'react';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import RestaurantData from './RestaurantData';

const DATA = [
  {
    title: 'Closeby',
    data: RestaurantData.results,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '900',
  },
  name: {
    marginTop: 16,
    fontSize: 16,
  },
  cuisine: {
    marginTop: 8,
    fontSize: 12,
  },
  vicinity: {
    marginTop: 8,
    fontSize: 12,
  },
  image: {
    width: 305,
    height: 150,
  },
});

const Item = ({ data }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={data.image} />
    <Text style={styles.name}>{data.name}</Text>
    <Text style={styles.cusine}>{data.cusine}</Text>
    <Text style={styles.vicinity}>{data.vicinity}</Text>
  </View>
);

const RestaurantList = () => (
  <View style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={item => item.place_id}
      renderItem={({ item }) => <Item data={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  </View>
);

export default RestaurantList;
