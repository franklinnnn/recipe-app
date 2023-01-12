import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import * as Style from "../style";

const Nav = () => {
  return (
    <Style.Nav>
      <GiKnifeFork />
      <Style.Logo to={"/"}> Recipe Receipt </Style.Logo>
    </Style.Nav>
  );
};

export default Nav;
