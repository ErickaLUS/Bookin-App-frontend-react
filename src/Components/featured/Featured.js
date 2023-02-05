import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/730466/pexels-photo-730466.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 proporties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/3517970/pexels-photo-3517970.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 proporties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/10949120/pexels-photo-10949120.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>533 proporties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured