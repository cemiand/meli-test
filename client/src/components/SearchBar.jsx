import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/meliFiles/Logo_ML.png";
import searchBtn from "../assets/meliFiles/ic_Search.png";
import "../styles/SearchBar.css";

const SearchBar = ({
  handleSubmit,
  handleEnterKeySubmit,
  handleInputChange,
  searchValue,
}) => {
  return (
    <nav>
      <div className="container">
        <div>
          <Link to="/">
            <img className="logoMeli" src={logo} alt="logo" title="logo" />
          </Link>
        </div>
        <div className="inputContainer">
          <input
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={searchValue ? handleEnterKeySubmit : null}
            placeholder="Nunca Dejes de buscar"
          />
          <button
            className="btnMeli"
            alt=""
            onClick={searchValue ? handleSubmit : null}
          >
            <img src={searchBtn} alt="searchBtn" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
