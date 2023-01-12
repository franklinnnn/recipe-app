import React, { useState, useEffect } from "react";
import * as Style from "../style";
import { useParams } from "react-router-dom";
import SimilarRecipes from "../components/SimilarRecipes";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  console.log(details);

  return (
    <>
      <Style.DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
          {details.cuisines ? (
            <div>
              <h4>--Cuisine</h4>
              {details.cuisines.slice(0, 2).map((items) => (
                <Style.Tags>
                  <h4></h4>
                  {items}
                </Style.Tags>
              ))}
            </div>
          ) : (
            ""
          )}
          {details.dishTypes ? (
            <Style.Tags>
              <h4>--Dish</h4>
              <h4>{details.dishTypes[0]}</h4>
            </Style.Tags>
          ) : (
            ""
          )}
          {details.diets ? (
            <Style.Tags>
              <h4>--Diet</h4>
              <h4>{details.diets[0]}</h4>
            </Style.Tags>
          ) : (
            ""
          )}
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        </div>
        <Style.Info>
          <Style.Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Style.Button>
          <Style.Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Style.Button>

          {activeTab === "instructions" && (
            <div>
              {/* <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3> */}
              {details.instructions ? (
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
              ) : (
                <h3>No instructions provided.</h3>
              )}
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </Style.Info>
      </Style.DetailWrapper>
      <SimilarRecipes />
    </>
  );
};

export default Recipe;
