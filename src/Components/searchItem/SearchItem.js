import React from 'react'
import { Link } from 'react-router-dom';
import './searchItem.css'
const SearchItem = ({item}) => {
  return (
    <div className="sItem">
      <img src={item.photos[0]} alt="" className="sImg" />
      <div className="sDesc">
        <h1 className="sTitle">{item.name}</h1>
        <span className="sDistance">{item.distance} from center</span>
        <span className="sTaxiOp">Free airport taxi</span>
        <span className="sSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="sFeature">{item.desc}</span>
        <span className="sCancelOp">Free cancellation</span>
        <span className="sCancelOpSubtitle">
          you can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sDetails">
        {item.rating && (
          <div className="sRating">
            <span className="">Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="sDetailTexts">
          <span className="sPrice">${item.cheapestPrice}</span>
          <span className="sTextOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="sCheckButton">see availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}   

export default SearchItem