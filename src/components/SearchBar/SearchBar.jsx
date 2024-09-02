import css from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <header className={css.header_block}>
      <form className={css.form_block}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};


export default SearchBar;
