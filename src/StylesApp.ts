import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f44336;
  box-shadow: 0px 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  position: fixed;
`;
export const ContainerHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
  width: 100%;
  height: 82vh;
`;
export const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 64px;
  padding-bottom: 64px;
  gap: 30px;

  div {
    max-width: 50%;
  }

  span {
    max-width: 30%;

    svg {
      color: #f44336;
      font-size: 230px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;

    div {
      max-width: 90%;
    }

    span {
      max-width: 100%;
    }
  }

  @media (max-width: 320px) {
    span {
      svg {
        font-size: 150px;
      }
    }
  }
`;
export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  padding-top: 64px;
  padding-bottom: 64px;

  div {
    max-width: 50%;
  }

  span {
    max-width: 30%;
    padding: 80px;

    svg {
      color: #f44336;
      font-size: 230px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;

    div {
      max-width: 90%;
    }

    span {
      max-width: 100%;
    }
  }

  @media (max-width: 320px) {
    span {
      padding: 0px;
      svg {
        font-size: 150px;
      }
    }
  }
`;
export const Section3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #555;
  padding-top: 85px;
  padding-bottom: 85px;
  color: white;

  h1 {
    font-size: 25px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }
`;
export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 100px;
  padding-bottom: 100px;
  gap: 40px;
`;
