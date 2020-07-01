import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { navigationPropTypes } from '~/types';

const Login = ({ navigation }) => (
  <SafeAreaView>
    <Text> Log in </Text>
    <Text onPress={() => navigation.goBack()}> Back to Welcome </Text>
  </SafeAreaView>
);

Login.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Login;
