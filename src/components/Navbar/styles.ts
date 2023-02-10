import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0px 25px;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }

  .selected {
    color: #000000;
    background-color: white;

    &:hover {
      background-color: #cccccc;
    }
  }
`;
