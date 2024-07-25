import React from "react";

const FavouriteItem = ({
  id,
  image,
  title,
  addtofavourites,
  removefavourites,
}) => {
  return (
    <div className="favourite-item">
      <img src={image} alt={title} className="favourite-item-image" />
      <div className="favourite-item-info">
        <h3>{title}</h3>
        {addtofavourites && (
          <button className="favourite-item-button" onClick={addtofavourites}>
            Add to Favourites
          </button>
        )}
        {removefavourites && (
          <button className="favourite-item-button" onClick={removefavourites}>
            Remove from Favourites
          </button>
        )}
      </div>
    </div>
  );
};

export default FavouriteItem;
