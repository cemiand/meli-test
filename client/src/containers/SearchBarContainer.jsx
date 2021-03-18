import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import SearchBar from "../components/SearchBar";

export const SearchBarContainer = () => {
  //ESTADOS LOCALES
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  //HANDLERS
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    setSearchValue("");
    history.push(`/items?search=${searchValue}`);
  };

  const handleEnterKeySubmit = (e) => {
    if (e.key === "Enter") {
      setSearchValue("");
      history.push(`/items?search=${searchValue}`);
    }
  };

  return (
    <SearchBar
      handleSubmit={handleSubmit}
      handleEnterKeySubmit={handleEnterKeySubmit}
      handleInputChange={handleInputChange}
      searchValue={searchValue}
    />
  );
};
