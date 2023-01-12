import React, { useState } from "react";
import * as Style from "../style";

import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    navigate(`/searched/${input}`);
    setInput("");
  };
  return (
    <Style.FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search recipes"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </Style.FormStyle>
  );
};

export default Search;
