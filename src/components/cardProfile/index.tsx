import React from 'react';

//STYLES
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Container, Name } from "./styles";
import { theme } from '@/theme';

//TYPES
interface CardProfileProps {
    name?: string | null;
    onPress: () => void;
    icon?: string | any;
    color?: string;
}

export default function CardProfile({ name, onPress, icon, color }: CardProfileProps) {
    return (
        <Container>
        <Avatar onPress={onPress} color={color}>
        {icon ? <Ionicons name={icon} size={30} color={name ? theme.colors.white : theme.colors.gray_800} /> : null}
        </Avatar>
        <Name>{name}</Name>
        </Container>
    );
}