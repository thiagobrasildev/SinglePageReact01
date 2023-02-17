import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 65px;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    color: #ffffff;
    font-weight: 500;
  }

  button {
    background-color: #000000;
    color: #ffffff;
    padding: 14px 22px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
      color: #000000;
    }
  }

  @media (max-width: 410px) {
    h1 {
      text-align: center;
    }
  }
`;
