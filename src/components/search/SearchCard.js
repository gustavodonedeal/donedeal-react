import React, { PropTypes } from "react";
import { Link } from "react-router";

const SearchCard = ({ ad }) => {
  let image;
  if (ad && ad.photos && ad.photos.length > 0) {
    image = (
      <img key={ad.id} className="card__image" src={ad.photos[0].small2Webp} />
    );
  } else {
    image = (
      <div key={ad.id} className="card__image-none">
        No Image! :(
      </div>
    );
  }
  let photo = ad && ad.photos > 0 && <img src={ad.photos[0].small} />;

  let price = ad.price ? `€${ad.price}` : "Free";

  return (
    <Link to={`/ad/${ad.id}`} key={ad.id} className="card-item">
      <div className="search__image-box">{image}</div>
      <div className="card__content">
        <span className="card__title">{ad.header}</span>
      </div>
      <div className="card__footer">
        <span className="card__price">{price}</span>
      </div>
    </Link>
  );
};

SearchCard.propTypes = {
  ad: PropTypes.object.isRequired
};

export default SearchCard;
