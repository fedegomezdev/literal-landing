import { NextPage } from "next";
import React from "react";
import PrimaryButton from "../../../../components/button/primaryButton";
import Logo from "../../../../components/logo";
import { LiteralLogoBlack } from "../../../../config/assets";
import { Container, MenuesContainer, MenuItem } from "./nav.styles";
import { NavProps } from "./nav.types";

const Nav: NextPage<NavProps> = ({ menues }) => {
  const ContactingSubmit = () => {
    console.log("Contactar");
  };

  return (
    <Container>
      <Logo />
      <MenuesContainer>
        {menues.map((menu, index) => (
          <MenuItem key={index}>
            <a href={`#${menu}`}>{menu}</a>
          </MenuItem>
        ))}
      </MenuesContainer>
      <PrimaryButton onclick={ContactingSubmit} title={"Contacto"} />
    </Container>
  );
};

export default Nav;
