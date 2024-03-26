import React from 'react';
import { TouchableOpacityProps } from 'react-native';

//STYLES
import { ButtonContainer, ButtonText } from './styles';

//TYPES
type Props = TouchableOpacityProps & {
    title: string;
  };

export function Button({ title, ...rest }: Props) {
    return (
      <ButtonContainer activeOpacity={0.7} {...rest}>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    );
  }