import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

export const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px,",
};

export const Wrapper = styled.div`
  margin: 0.2rem 0;
  padding: 4rem 0;
  border-top: 0.2rem dashed #000;
  border-bottom: 0.2rem dashed #000;
  @media screen and (max-width: 425px) {
    margin: 0.2rem 0.6rem;
    padding: 0 0.6rem 4rem 0.6rem;
  }
`;

export const Card = styled.div`
  min-height: 16rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100%;
    padding: 0.4rem 0;
    text-align: center;
    font-weight: 600;
    color: #000;
    background: linear-gradient(
      rgba(225, 225, 225, 0),
      rgba(225, 225, 225, 0.5)
    );
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 0.2rem solid #000;
  }
  p:hover {
    background: linear-gradient(
      rgba(225, 225, 225, 0),
      rgba(225, 225, 225, 0.25)
    );
    border: 0.2rem solid #000;
  }
  @media screen and (max-width: 425px) {
    min-height: 10rem;
    width: 6rem;
    p {
      font-size: 0.8rem;
    }
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 2rem;
  border-top: 0.2rem dashed #313131;
  padding: 2rem 0;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export const CuisineCard = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 0.2rem;
    border: 0.2rem dashed #000;
    border-bottom: 0.2rem solid #000;
  }
  img: hover {
    border: 0.2rem solid #000;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const Pages = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 0.2rem dashed #313131;
`;

export const FormStyle = styled.form`
  margin: 0 6rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    background: #fff;
    font-size: 1.4rem;
    color: #000;
    padding: 1rem 3rem;
    outline: none;
    border: 0.2rem solid transparent;
    border-bottom: 0.2rem solid #313131;
    width: 100%;
    transition: 0.2s ease;
  }
  input: focus {
    border: 0.2rem solid #313131;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #000;
  }
  @media screen and (max-width: 425px) {
    margin: 0 2rem;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 425px) {
    margin: 0.6rem;
    padding: 2rem 0.6rem;
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  border-bottom: 0.2rem solid #313131;
  cursor: pointer;
  h4 {
    color: #313131;
    font-size: 0.8rem;
  }
  svg {
    color: #313131;
    font-size: 1.8rem;
  }
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    border: 0.2rem solid #313131;
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
  @media screen and (max-width: 425px) {
    margin: 0;
    width: 4rem;
    height: 4rem;
  }
`;

export const DetailWrapper = styled.div`
  margin: 0.2rem 0;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 50% 50%;
  border-top: 0.2rem dashed #313131;
  border-bottom: 0.2rem dashed #313131;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  img {
    width: 100%;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0.2rem 0;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  max-width: 10rem;
  font-weight: 600;
  @media screen and (max-width: 425px) {
    margin-right: 0.6rem;
    padding: 0.6rem;
    max-width: 8rem;
  }
`;

export const Info = styled.div`
  margin-left: 4rem;
  @media screen and (max-width: 425px) {
    margin-left: 2rem;
    li{
      font-size: 1rem;
      line-height: 1.4rem;
  }
`;

export const Similar = styled.div`
  margin-left: 2rem;
  li {
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
`;
export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 4rem;
    margin: 0 2rem;
    padding: 0.6rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  @media screen and (max-width: 425px) {
    padding: 2 rem 0.2rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Footer = styled.div`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 12rem;
  }
  div {
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 2rem 0rem;
  }
  h3 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    div {
      width: 100%;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
