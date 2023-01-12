import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as Style from "../style";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 4;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indextOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchedRecipes.slice(
    indextOfFirstResult,
    indexOfLastResult
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
  };

  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  console.log(currentResults);
  return (
    <>
      <Style.Grid>
        {currentResults.map((item, index) => (
          <Style.CuisineCard key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Style.CuisineCard>
        ))}
      </Style.Grid>
      <Style.Pages>
        {searchedRecipes.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(searchedRecipes.length / resultsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Style.Pages>
    </>
  );
};
export default Searched;
