import React, { useEffect, useState } from "react";
import * as Style from "../style";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 4;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indextOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = cuisine.slice(indextOfFirstResult, indexOfLastResult);

  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("cuisine").scrollIntoView({ behavior: "smooth" });
  };

  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params);
  }, [params.type]);
  return (
    <div>
      <Style.Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="cuisine"
      >
        {currentResults.map((item) => (
          <Style.CuisineCard key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Style.CuisineCard>
        ))}
      </Style.Grid>
      <Style.Pages>
        {cuisine.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(cuisine.length / resultsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Style.Pages>
    </div>
  );
};

export default Cuisine;
