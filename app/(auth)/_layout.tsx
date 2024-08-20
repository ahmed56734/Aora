import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { colors } from '~/constants/colors';

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" options={{}} />
      </Stack>
      <StatusBar backgroundColor={colors.primary} style="light" />
    </>
  );
};

export default AuthLayout;
