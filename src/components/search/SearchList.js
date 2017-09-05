import React, { PropTypes } from 'react';
import SearchCard from './SearchCard';

const SearchList = ({ ads }) => {
  return (
    <div className="card-list">
      {ads.map((ad) => <SearchCard key={ad.id} ad={ad} /> )}
    </div>
  );
};

SearchList.propTypes = {
  ads: PropTypes.array.isRequired
};

export default SearchList;