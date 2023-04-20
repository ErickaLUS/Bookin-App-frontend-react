import React from "react";
import './featuredProperties.css'
import useFetch from "../../Hooks/useFetch";
const FeaturedProperties = () => {


  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="fProperties">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fPropertiesItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">À  partir de {item.cheapestPrice}$</span>
             {item.rating &&<div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
