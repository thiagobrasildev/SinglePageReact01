import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <ul>
        <li className="selected">Home</li>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </S.Container>
  );
};
