import { Container, Logo, SubTitle, Title } from './styles';
import CardProfile from '@/components/cardProfile';

export default function Index() {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Bem Vindo(a)</Title>
      <SubTitle>Escolha um Usuário</SubTitle>
      <CardProfile icon={"person-sharp"} name={"victor"} onPress={() => console.log("cliquei")}/>
      <CardProfile icon={"add"} name={null} onPress={() => console.log("Add")}/>
    </Container>
  );
}

