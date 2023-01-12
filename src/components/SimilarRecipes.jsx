import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as Style from "../style";

const SimilarRecipes = () => {
  const [similarRecipes, setSimilarRecipes] = useState([]);
  let params = useParams();
  //   const getSimilarRecipes = async () => {
  //     const check = localStorage.getItem("similarRecipes");
  //     if (check) {
  //       setSimilarRecipes(JSON.parse(check));
  //     } else {
  //       const api = await fetch(
  //         `https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
  //       );
  //       const data = await api.json();
  //       localStorage.setItem("similarRecipes", JSON.stringify(data.recipes));
  //       setSimilarRecipes(data.recipes);
  //       console.log(data.recipes);
  //     }
  //   };

  const getSimilarRecipes = async () => {
    const api =
      await fetch(`https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=5
    `);
    const data = await api.json();
    setSimilarRecipes(data);
    console.log(data);
  };
  useEffect(() => {
    getSimilarRecipes();
  }, [params.name]);

  return (
    <div>
      <Style.Wrapper>
        <h3>Similar Recipes</h3>
        <Style.Similar>
          <ul>
            {similarRecipes.map((recipe) => (
              <li map={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Style.Similar>
      </Style.Wrapper>
    </div>
  );
};

export default SimilarRecipes;
