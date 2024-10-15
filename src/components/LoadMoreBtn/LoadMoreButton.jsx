import css from "./loadMore.module.css";

const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.load_more_button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
