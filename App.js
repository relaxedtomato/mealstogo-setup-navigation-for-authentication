import React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '~/scenes/home';
import Search from '~/scenes/search';
import Profile from '~/scenes/profile';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      /* eslint-disable */
      'lora-bold': require('./assets/fonts/Lora-Bold.ttf'),
      'lora-bold-italic': require('./assets/fonts/Lora-BoldItalic.ttf'),
      'lora-italic': require('./assets/fonts/Lora-Italic.ttf'),
      'lora-regular': require('./assets/fonts/Lora-Regular.ttf'),
      'sanchez-italic': require('./assets/fonts/Sanchez-Italic.ttf'),
      'sanchez-regular': require('./assets/fonts/Sanchez-Regular.ttf'),
      /* eslint-enable */
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : null;
  }
}
