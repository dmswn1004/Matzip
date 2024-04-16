import React from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator() {
  const isLogged = false;
  return <>{isLogged ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
