import { useEffect, useRef, useState } from "react";
import { FlatList, Alert, Keyboard } from "react-native";

//UTILS
import Bottom from "@gorhom/bottom-sheet";

//DATABASE
import { useUsersRepository } from "@/database/useUsersRepository";

//COMPONENTS
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { BottomSheet } from "@/components/BottomSheet";
import CardProfile from "@/components/CardProfile";

//STYLES
import { theme } from "@/theme";
import { Container, ContentCard, Logo, SubTitle, Title } from "./styles";

export default function Index() {

    // BOTTOM SHEET
    const bottomSheetRef = useRef<Bottom>(null);
    const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
    const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

    // STATES
    const [name, setName] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [users, setUsers] = useState<any[]>([]);
    const useUsers = useUsersRepository();

    // FUNÇÃO CRIAR USUÁRIO
    async function handleCreate() {
        try {
            if (name === "" || color === "") {
                Alert.alert("Erro", "Preencha todos os campos.");
                return;
            }

            useUsers.create({ name, color });

            Keyboard.dismiss();
            handleBottomSheetClose();
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso.");

            setName("");
            setColor("");

            fetchUsers();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível cadastrar.");
            console.log(error);
        }
    }

    // FUNÇÃO LISTAR USUÁRIOS
    async function fetchUsers() {
        try {
            const response = useUsers.list();
            setUsers(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} />
            <Title>Bem Vindo(a)</Title>
            <SubTitle>Escolha um Usuário</SubTitle>
            <FlatList
                data={[
                    ...users,
                    {
                        id: "addButton",
                        name: null,
                        color: theme.colors.blue_200,
                    },
                ]}
                keyExtractor={(item) => String(item.id)}
                numColumns={3}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ContentCard>
                        <CardProfile
                            icon={
                                item.id === "addButton" ? "add" : "person-sharp"
                            }
                            name={item.name}
                            color={item.color}
                            onPress={() =>
                                item.id === "addButton"
                                    ? handleBottomSheetOpen()
                                    : null
                            }
                        />
                    </ContentCard>
                )}
                contentContainerStyle={{ alignItems: "center" }}
            />

            <BottomSheet
                ref={bottomSheetRef}
                title="Novo Usuário"
                snapPoints={[0.01, 284]}
                onClose={handleBottomSheetClose}
            >
                <Input placeholder="Nome" onChangeText={setName} value={name} />

                <Input
                    placeholder="Cor"
                    onChangeText={setColor}
                    value={color}
                />

                <Button title="Criar" onPress={() => handleCreate()} />
            </BottomSheet>
        </Container>
    );
}
