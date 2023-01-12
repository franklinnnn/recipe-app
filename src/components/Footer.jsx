import React, { useEffect, useState } from "react";
import * as Style from "../style";
import { AiOutlineBarcode } from "react-icons/ai";
import qr from "../assets/qr.png";

const Footer = () => {
  const [foodTrivia, setFoodTrivia] = useState("");

  const fetchJoke = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const trivia = await data.json();
    setFoodTrivia(trivia.text);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  console.log(foodTrivia);
  return (
    <Style.Footer>
      <h3>Recipe Receipt</h3>
      <a href="https://github.com/franklinnnn/recipe-app" target="_blank">
        <img src={qr} alt="qr-code" />
        <p>GitHub</p>
      </a>

      <h3>{foodTrivia}</h3>
      <div>
        <h4>{date}</h4>
        <h4>{time}</h4>
      </div>
    </Style.Footer>
  );
};

export default Footer;
