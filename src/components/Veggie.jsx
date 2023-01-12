import React, { useEffect, useState } from "react";
import * as Style from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import noImage from "../assets/noimage.jpg";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`
      );

      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <div>
      <Style.Wrapper>
        <h3>Veggie Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: " 2rem",
          }}
        >
          {veggie.map((recipe) => (
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

export default Veggie;
