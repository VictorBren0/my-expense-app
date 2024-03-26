import styled from "styled-components/native";

interface AvatarProps {
    color?: string;
}

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.TouchableOpacity<AvatarProps>`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background-color: ${({ theme, color }) => color ? color : theme.colors.blue_200};
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Name = styled.Text`
    font-size: ${({ theme }) => theme.fonts.size.xs}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.family.medium};
`;