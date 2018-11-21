import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0.25;
`;
const Greeting = () => (
  <Container>
    Made by <a href="https://github.com/zavjs">H. Zavareze</a>
    <br />
    Checkout the{" "}
    <a href="https://github.com/zavjs/terminal">Github Repository</a>
  </Container>
);

export default Greeting;
