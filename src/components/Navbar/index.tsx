import { BsList } from "react-icons/bs";
import { useState } from "react";
import * as S from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <S.Container open={open}>
        <ul>
          <li className="selected">Home</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <button onClick={() => setOpen(!open)}>
          <BsList size={30} />
        </button>
      </S.Container>
    </>
  );
};
