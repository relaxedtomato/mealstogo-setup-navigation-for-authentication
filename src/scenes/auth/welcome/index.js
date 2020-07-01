import React from 'react';
import { Dimensions, Text, SafeAreaView, StyleSheet } from 'react-native';

import { Colors, Typography, Spacing } from '~/styles';
import { navigationPropTypes } from '~/types';

const styles = StyleSheet.create({
  imageBackground: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  linkContainer: {
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    margin: Spacing.large,
    opacity: 0.75,
    padding: Spacing.medium,
  },
  login: {
    fontFamily: 'sanchez-regular',
    fontSize: Typography.largeFontSize,
    marginTop: Spacing.medium,
    textAlign: 'center',
  },
  signUp: {
    fontFamily: 'sanchez-regular',
    fontSize: Typography.largeFontSize,
    margin: Spacing.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  signUpButton: {
    alignSelf: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: 10,
    width: '80%',
  },
  welcome: {
    fontFamily: 'oswald-regular',
    fontSize: 48,
    margin: Spacing.large,
    position: 'absolute',
    top: Spacing.xlarge,
  },
});

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
