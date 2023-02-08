import React from 'react'
import './searchItem.css'
const SearchItem = () => {
  return (
    <div className="sItem">
      <img
        src="https://images.pexels.com/photos/670246/pexels-photo-670246.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
        className="sImg"
      />
      <div className="sDesc">
        <h1 className="sTitle">Tower Street Apartments</h1>
        <span className="sDistance">500m from center</span>
        <span className="sTaxiOp">Free airport taxi</span>
        <span className="sSubtitle">
          Studio Apertment with Air conditioning
        </span>
        <span className="sFeature">
          Entire studio · 1 bathroom·21m² 1 full bed
        </span>
        <span className="sCancelOp">Free cancellation</span>
        <span className="sCancelOpSubtitle">
          you can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sDetails">
        <div className="sRating">
          <span className="">Excellent</span>
          <button>8.9</button>
        </div>
        <div className="sDetailTexts">
          <span className="sPrice">$123</span>
          <span className="sTextOp">Includes taxes and fees</span>
          <button className="sCheckButton">see availability</button>
        </div>
      </div>
    </div>
  );
}   

export default SearchItem