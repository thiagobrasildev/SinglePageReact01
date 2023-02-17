import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SubTitle } from "./components/SubTitle";
import { Text } from "./components/Text";
import { Title } from "./components/Title";
import { FaAnchor, FaCoffee } from "react-icons/fa";

import * as S from "./StylesApp";

export const App = () => {
  return (
    <S.ContainerMain>
      <S.ContainerNavbar>
        <Navbar />
      </S.ContainerNavbar>
      <S.ContainerHero>
        <Hero />
      </S.ContainerHero>
      <S.Section1>
        <div>
          <Title />
          <SubTitle />
          <Text />
        </div>
        <span>
          <FaAnchor />
        </span>
      </S.Section1>
      <S.Section2>
        <span>
          <FaCoffee />
        </span>
        <div>
          <Title />
          <SubTitle />
          <Text />
        </div>
      </S.Section2>
      <S.Section3>
        <h1>Quote of the day: live life</h1>
      </S.Section3>
      <S.ContainerFooter>
        <Footer />
      </S.ContainerFooter>
    </S.ContainerMain>
  );
};
