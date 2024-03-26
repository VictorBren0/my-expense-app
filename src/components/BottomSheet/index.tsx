import React, { ReactNode, forwardRef } from "react";

//STYLES
import { theme } from "@/theme";
import { Container, DirectionRow, TitleText } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//LIBS
import Bottom from "@gorhom/bottom-sheet";

//TYPES
export type Props = {
    onClose: () => void;
    title: string;
    children: ReactNode;
    snapPoints: number[];
};

export const BottomSheet = forwardRef<Bottom, Props>(
    ({ onClose, children, snapPoints, title }, ref) => {
        return (
            <Bottom
                ref={ref}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{
                    borderWidth: 1,
                    borderColor: theme.colors.gray_600,
                    backgroundColor: theme.colors.gray_900,
                }}
                handleComponent={() => null}
            >
                <Container>
                    <DirectionRow>
                        <TitleText>{title}</TitleText>
                        <MaterialIcons
                            name="close"
                            size={24}
                            color={theme.colors.gray_300}
                            onPress={onClose}
                        />
                    </DirectionRow>
                    {children}
                </Container>
            </Bottom>
        );
    }
);
