import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue_800};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  text-transform: uppercase;
`;