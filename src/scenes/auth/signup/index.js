import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { navigationPropTypes } from '~/types';

const SignUp = ({ navigation }) => (
  <SafeAreaView>
    <Text> Sign up </Text>
    <Text onPress={() => navigation.goBack()}> Back to Welcome </Text>
  </SafeAreaView>
);

SignUp.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default SignUp;
