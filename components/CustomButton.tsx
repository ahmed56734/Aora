import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  isLoading?: boolean;
  textStyles?: string;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className={`min-h-[62px] items-center justify-center rounded-xl bg-secondary ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
      <Text className={`font-psemibold text-lg text-primary ${textStyles}`}> {title} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
