import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
    gap: 15px;
`;

export const TitleText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.family.medium};
    font-size: ${({ theme }) => theme.fonts.size.lg}px;
`;

export const DirectionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
