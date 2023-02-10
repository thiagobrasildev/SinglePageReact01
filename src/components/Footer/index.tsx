import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchat,
  FaPinterestP,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <div>
        <FaFacebookSquare size={24} />
        <FaInstagram size={24} />
        <FaSnapchat size={24} />
        <FaPinterestP size={24} />
        <FaTwitter size={24} />
        <FaLinkedinIn size={24} />
      </div>
      <p>
        Powered by <a href="#">Thiago</a>
      </p>
    </S.Container>
  );
};
