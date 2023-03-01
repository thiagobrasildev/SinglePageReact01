import styled, { css } from "styled-components";

export const Container = styled.div`${(props: {
  open?: boolean;
}) => css`
  display: flex;
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

  button {
    display: none;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #ffffff;
    height: 100%;
    border: none;
    min-width: 66px;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }

  @media (max-width: 620px) {
    align-items: flex-start;
    position: absolute;
    ul {
      ${props.open && css`
        flex-direction: column;
        height: auto;
        width: 100%;
      `}
      li {
        line-height: 50px;
        &:first-child {
          width: 100px;
        }
        &:not(:first-child) {
          display: ${props.open ? 'block' : 'none'};
          background-color: #fff;
          width: calc(100% + 66px);
          color: #000;
          &:hover {
            background-color: #cccccc;
          }
        }
      }
    }
    button {
      display: flex;
      position: absolute;
      right: 0px;
    }
  }
`}`

