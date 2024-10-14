import React, { useState } from "react";

import css from "./searchBar.module.css";

const SearchBar = ({ onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    onClick(searchTerm);
  };

  return (
    <header className={css.header_block}>
      <form className={css.form_block} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
