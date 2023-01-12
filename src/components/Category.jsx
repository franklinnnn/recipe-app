import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiTacos, GiSushis, GiCroissant } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import * as Style from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Category = () => {
  const categories = [
    {
      name: "Italian",
      link: "Italian",
      icon: <FaPizzaSlice />,
    },
    {
      name: "American",
      link: "American",
      icon: <FaHamburger />,
    },
    {
      name: "Chinese",
      link: "Chinese",
      icon: <GiNoodles />,
    },
    {
      name: "Japanese",
      link: "Japanese",
      icon: <GiSushis />,
    },
    {
      name: "Mexican",
      link: "Mexican",
      icon: <GiTacos />,
    },
    {
      name: "French",
      link: "French",
      icon: <GiCroissant />,
    },
  ];
  return (
    <Style.List>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: " 2rem",
          width: "100%",
        }}
      >
        {categories.map((item) => (
          <SplideSlide>
            <Style.SLink to={`/cuisine/${item.link}`}>
              {item.icon}
              <h4>{item.name}</h4>
            </Style.SLink>
          </SplideSlide>
        ))}
        {/* <Style.SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/Chinese"}>
            <GiNoodles />
            <h4>Chinese</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/Japanese"}>
            <GiSushis />
            <h4>Japanese</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/Mexican"}>
            <GiTacos />
            <h4>Mexican</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/French"}>
            <GiCroissant />
            <h4>French</h4>
          </Style.SLink>
          <Style.SLink to={"/cuisine/French"}>
            <FiMoreHorizontal />
            <h4>More</h4>
          </Style.SLink> */}
      </Splide>
    </Style.List>
  );
};

export default Category;
