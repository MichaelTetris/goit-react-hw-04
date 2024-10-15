import css from "./imagesGallery.module.css";
import React from "react";

const ImagesList = React.memo(({ images }) => {
  return (
    <div className={css.imageGrid}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className={css.imageItem}
        />
      ))}
    </div>
  );
});

/* const ImagesList = ({ images }) => {
  
  const renderedImages = useMemo(() => {
    return images.map((image) => (
      <img className={css.imageItem} key={image.id} src={image.urls.thumb} alt={image.alt_description} />
    ));
  }, [images]); 

  return <div className={css.imageGrid}>{renderedImages}</div>;
}; */

export default ImagesList;
