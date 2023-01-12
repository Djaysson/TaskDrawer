import { MdAdd } from "react-icons/md";
import { Container } from "./styles";

export function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size={24} color="#FFF" />
        </button>
      </header>

      <ul></ul>
    </Container>
  );
}
