import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
        <img
          src="https://images.pexels.com/photos/7502450/pexels-photo-7502450.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propertyListImg"
        />
        <div className="propertyListTitle">
          <h1>Hotels</h1>
          <h2>233</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.pexels.com/photos/2413838/pexels-photo-2413838.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propertyListImg"
        />
        <div className="propertyListTitle">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem">
        <img
          src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propertyListImg"
        />
        <div className="propertyListTitle">
          <h1>Ressort</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.pexels.com/photos/2945692/pexels-photo-2945692.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propertyListImg"
        />
        <div className="propertyListTitle">
          <h1>Apartments</h1>
          <h2>232 hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.pexels.com/photos/12949628/pexels-photo-12949628.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propertyListImg"
        />
        <div className="propertyListTitle">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList