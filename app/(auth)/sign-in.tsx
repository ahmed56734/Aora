import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '~/components/CustomButton';
import FormField from '~/components/FormField';
import { images } from '~/constants';
import { colors } from '~/constants/colors';

interface Props {}

const SignIn = (props: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmetting, setIsSubmetting] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        height: '100%',
        flex: 1,
      }}>
      <ScrollView>
        <View className="h-[75vh] w-full justify-center px-4">
          <Image source={images.logo} resizeMode="contain" className="h[35] w-[115]" />
          <Text className="mt-10 font-psemibold text-2xl font-semibold text-white">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            otherStyles="mt-7"
            keyboardType="email"
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
          />
          <FormField
            title="Password"
            value={form.password}
            otherStyles="mt-7"
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
          />

          <CustomButton
            title="Sign in"
            containerStyles="mt-7"
            handlePress={() => {}}
            isLoading={isSubmetting}
          />

          <View className="mt-5 flex-row justify-center gap-2">
            <Text className="font-pregular text-lg text-gray-100">Don't have account?</Text>
            <Link href="/sign-up" className="font-psemibold text-lg text-secondary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
