import React, { useEffect, useState } from "react";
import * as Style from "../style";
import { AiOutlineBarcode } from "react-icons/ai";

const Footer = () => {
  const [foodJoke, setFoodJoke] = useState("");

  const fetchJoke = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/food/jokes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const joke = await data.json();
    setFoodJoke(joke.text);
    console.log(joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  console.log(foodJoke);
  return (
    <Style.Footer>
      <h3>Recipe Receipt</h3>
      <AiOutlineBarcode />
      <h3>{foodJoke}</h3>
      <div>
        <h4>{date}</h4>
        <h4>{time}</h4>
      </div>
    </Style.Footer>
  );
};

export default Footer;
