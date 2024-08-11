import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import CustomButton from '~/components/CustomButton';
import { images } from '~/constants';

export default function Home() {
  return (
    <SafeAreaView className="bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="min-h-[85vh] w-full flex-1 items-center justify-center px-4">
          <Image source={images.logo} resizeMode="contain" className="h-[84] w-[130]" />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="h-[380] w-full max-w-[380]"
          />

          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold capitalize text-white">
              Discover endless {'\n'} possibilities with{' '}
              <Text className="inline text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute -bottom-2 -right-8 h-[15] w-[136]"
            />
          </View>

          <Text className="mt-7  text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless exploration with
            Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push('/sign-in');
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
