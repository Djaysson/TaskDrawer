import Avatar from "../../assets/img/avatarM.png";
import { Container, Label } from "./styles";

export function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="avatar" />}
    </Container>
  );
}
