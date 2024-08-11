import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '~/constants';

interface Props {}

const SignIn = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="my-6 w-full justify-center px-4">
          <Image source={images.logo} resizeMode="contain" className="h[35] w-[115]" />
          <Text className="mt-10 font-psemibold text-2xl font-semibold text-white">
            Log in to Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
