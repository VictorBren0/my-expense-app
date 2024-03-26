import styled from 'styled-components/native';


export const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  border-radius: 5px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.md}px;
`;