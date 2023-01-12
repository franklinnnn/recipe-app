import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Style from "../style";
import noImage from "../assets/noimage.jpg";

const Dessert = () => {
  const [dessert, setDessert] = useState([]);

  const getDessert = async () => {
    const check = localStorage.getItem("dessert");
    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=dessert`
      );

      const data = await api.json();
      localStorage.setItem("dessert", JSON.stringify(data.recipes));

      setDessert(data.recipes);
    }
  };

  useEffect(() => {
    getDessert();
  }, []);
  return (
    <div>
      <Style.Wrapper>
        <h3>Dessert Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: " 2rem",
          }}
        >
          {dessert.map((recipe) => (
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

export default Dessert;
