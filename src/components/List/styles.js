import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid var(--transparent-white);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: var(--roxo-02);
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
