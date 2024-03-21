import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.xl}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.bold};
  text-align: center;
  
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  text-align: center;
  margin: 50px 0 50px 0;
`;

export const Logo = styled.Image`
    width: 250px;
    height: 150px;
    margin: 60px 0 20px 0;    
    align-self: center;
`;