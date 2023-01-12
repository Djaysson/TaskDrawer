import Avatar from "../../assets/img/avatarM.png";
import { Container, Label } from "./styles";

export function Card() {
  return (
    <Container>
      <header>
        <Label color="#5B21B6" />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img src={Avatar} alt="" />
    </Container>
  );
}
