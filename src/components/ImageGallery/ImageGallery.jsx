import css from "./imagesGallery.module.css"

const ImagesList = ({ images }) => {
  return (
    <>
      <h1 className={css.titleResult}>Result for Pic</h1>
      {<div className={css.imageGrid}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className={css.imageItem}
          />
        ))}
      </div>}
    </>
  )
}

export default ImagesList;