import * as S from "./styles";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";

export const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <>
      <S.Container>
        <ul>
          <li className="selected">Home</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </S.Container>
      <S.Mobile>
        <button onClick={() => setOpen(!open)}>
          {open ? <BsXLg size={30} /> : <BsList size={40} />}
        </button>
        {open ? (
          <ul>
            <li className="selected">Home</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        ) : null}
      </S.Mobile>
    </>
  );
};
