import React from 'react';
import { TextInputProps } from 'react-native';

//STYLES
import { StyledTextInput } from './styles';
import { theme } from '@/theme';

export function Input({ ...rest }: TextInputProps) {
  return <StyledTextInput placeholderTextColor={theme.colors.gray_300} {...rest} />;
}