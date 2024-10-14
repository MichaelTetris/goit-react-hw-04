
import css from "./searchBar.module.css";

const SearchBar = ({ onClick }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Вызываем переданную функцию onClick
    onClick(searchTerm);
  };
  
  return (
    <header className={css.header_block}>
      <form className={css.form_block} onSubmit={handleSubmit}> {/* Используем onSubmit */}
        <input
          className={css.input}
          type="search"
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

