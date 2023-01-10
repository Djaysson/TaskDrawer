import Picture from "../../assets/img/logo.png";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={Picture} alt="Project logo " />
    </Container>
  );
}
