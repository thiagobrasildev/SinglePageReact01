import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    svg {
      color: #555;
      cursor: pointer;

      &:hover {
        color: #888;
      }
    }
  }

  p {
    color: #555;

    a {
      color: #555;
      text-decoration: underline;
    }
  }
`;
