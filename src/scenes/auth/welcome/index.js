import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { navigationPropTypes } from '~/types';

const Welcome = ({ navigation }) => (
  <SafeAreaView>
    <Text> Welcome </Text>
    <Text onPress={() => navigation.navigate('SignUp')}> Sign up </Text>
    <Text onPress={() => navigation.navigate('Login')}> Log in </Text>
  </SafeAreaView>
);

Welcome.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Welcome;
