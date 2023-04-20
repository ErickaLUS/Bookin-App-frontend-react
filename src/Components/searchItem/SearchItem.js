import React from 'react'
import { Link } from 'react-router-dom';
import './searchItem.css'
const SearchItem = ({item}) => {
  return (
    <div className="sItem">
      <img src={item.photos[0]} alt="" className="sImg" />
      <div className="sDesc">
        <h1 className="sTitle">{item.name}</h1>
        <span className="sDistance">{item.distance} du centre</span>
        <span className="sTaxiOp">Taxi aéroport gratuit</span>
        <span className="sSubtitle">
          Studio appartements avec climatisation
        </span>
        <span className="sFeature">{item.desc}</span>
        <span className="sCancelOp">Annulation gratuite</span>
        <span className="sCancelOpSubtitle">
          vous pouvez annuler plus tard, alors profitez de ce prix exceptionnel
          dès aujourd'hui !
        </span>
      </div>
      <div className="sDetails">
        {item.rating && (
          <div className="sRating">
            <span className="">Excellente</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="sDetailTexts">
          <span className="sPrice">${item.cheapestPrice}</span>
          <span className="sTextOp">Comprend les taxes et les frais</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="sCheckButton">Voir la disponibilité</button>
          </Link>
        </div>
      </div>
    </div>
  );
}   

export default SearchItem