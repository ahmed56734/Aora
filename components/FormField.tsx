import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { icons } from '~/constants';

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
  keyboardType?: keyboard;
}

type keyboard = 'email';
const FormField = ({
  title,
  placeholder,
  value,
  otherStyles,
  handleChangeText,
  keyboardType,
}: Props) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  return (
    <View className={twMerge('space-y-2', otherStyles)}>
      <Text className=" font-pmedium text-base text-gray-100">{title}</Text>

      <View className="mt-2 h-16 w-full flex-row items-center rounded-2xl  border-2 border-black-200 bg-black-100 px-4 focus:border-secondary">
        <TextInput
          className="flex-1 font-psemibold text-base text-white"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassowrd}
        />
        {title === 'Password' && (
          <TouchableOpacity
            onPress={() => {
              setShowPassowrd(!showPassowrd);
            }}>
            <Image
              source={showPassowrd ? icons.eyeHide : icons.eye}
              resizeMode="contain"
              className="h-6 w-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
