import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

:root{
  --white: #C2CBD4;
  --gray:#54657B;
  --background: #0E172B;
  --background-02: #151E32;
  --background: #151E32;
  --roxo:#5A20B6;
  --roxo-02:#5B21B6;


}
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

html, body , #root{
  height:100%;

}
body{
  font: 14px 'Roboto',sans-serif;
  color: var(--white);
  background:var(--background);
  -webkit-font-smoothing:antialiased !important;
}
ul{
  list-style:none;
}
`;
