import React, { useEffect, useState } from "react";
import * as Style from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import noImage from "../assets/noimage.jpg";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      <Style.Wrapper>
        <h3>Popular Dishes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: " 2rem",
          }}
        >
          {popular.map((recipe) => (
            <SplideSlide>
              <Style.Card key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img
                    src={recipe.image ? recipe.image : noImage}
                    alt={recipe.title}
                  />
                </Link>
              </Style.Card>
            </SplideSlide>
          ))}
        </Splide>
      </Style.Wrapper>
    </div>
  );
};

export default Popular;
