import React from 'react';
import { Image, SectionList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

import RestaurantData from '~/services/RestaurantData';

const restaurantPropTypes = PropTypes.shape({
  image: PropTypes.number,
  name: PropTypes.string,
  cuisine: PropTypes.string,
  vicinity: PropTypes.string,
});

const renderFavRestaurant = ({ item: restaurants }) => (
  <FavRestaurant restaurants={restaurants} />
);

renderFavRestaurant.propTypes = {
  item: restaurantPropTypes.isRequired,
};

const renderClosebyRestaurant = ({ item: restaurant }) => (
  <ClosebyRestaurant restaurant={restaurant} />
);

renderClosebyRestaurant.propTypes = {
  item: restaurantPropTypes.isRequired,
};

const RESTAURANT_DATA = [
  {
    title: 'Favorites',
    data: [RestaurantData.results.slice(11, 16)], // [[r1, r2, r3]]
    renderItem: renderFavRestaurant,
  },
  {
    title: 'Close by',
    data: RestaurantData.results.slice(0, 10), // [r1, r2, r3]
    renderItem: renderClosebyRestaurant,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  closebyContainer: {
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '900',
  },
  closebyName: {
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
  closebyImage: {
    width: 305,
    height: 150,
  },
  favContainer: {
    padding: 8,
    backgroundColor: '#f9f9f9',
  },
  favImage: {
    width: 150,
    height: 100,
  },
  favName: {
    marginTop: 8,
    fontSize: 16,
  },
  swiper: {
    height: 160,
  },
  slide: {
    flexDirection: 'row',
  },
});

const ClosebyRestaurant = ({ restaurant }) => (
  <View style={styles.closebyContainer}>
    <Image style={styles.closebyImage} source={restaurant.image} />
    <Text style={styles.closebyName}>{restaurant.name}</Text>
    <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
    <Text style={styles.vicinity}>{restaurant.vicinity}</Text>
  </View>
);

ClosebyRestaurant.propTypes = {
  restaurant: restaurantPropTypes.isRequired,
};

const FavRestaurant = ({ restaurants }) => {
  let gridSection = [];

  const favDataGrid = restaurants.reduce(
    (allRestaurants, currentRestaurant, index) => {
      if (gridSection.length === 2) {
        allRestaurants.push(gridSection);
        gridSection = [];
      }

      const isLastItem = restaurants.length - 1 === index;

      if (isLastItem) {
        if (gridSection.length === 1) {
          gridSection.push(currentRestaurant);
          allRestaurants.push(gridSection);
        } else {
          allRestaurants.push([currentRestaurant]);
        }
      } else {
        gridSection.push(currentRestaurant);
      }

      return allRestaurants;
    },
    []
  );

  return (
    <Swiper showsPagination={false} style={styles.swiper}>
      {favDataGrid.map(section => {
        const [firstRestaurant, secondRestaurant] = section;

        return (
          <View style={styles.slide} key={firstRestaurant.place_id}>
            <View style={styles.favContainer} key={firstRestaurant.place_id}>
              <Image source={firstRestaurant.image} style={styles.favImage} />
              <Text style={styles.favName}>{firstRestaurant.name}</Text>
            </View>
            {secondRestaurant && (
              <View style={styles.favContainer} key={secondRestaurant.place_id}>
                <Image
                  source={secondRestaurant.image}
                  style={styles.favImage}
                />
                <Text style={styles.favName}>{secondRestaurant.name}</Text>
              </View>
            )}
          </View>
        );
      })}
    </Swiper>
  );
};

FavRestaurant.propTypes = {
  restaurants: PropTypes.arrayOf(restaurantPropTypes).isRequired,
};

const RestaurantList = () => (
  <View style={styles.container}>
    <SectionList
      sections={RESTAURANT_DATA}
      keyExtractor={restaurant => restaurant.place_id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  </View>
);

export default RestaurantList;
