import React from 'react'
import useFetch from '../../Hooks/useFetch';
import './featured.css'

const Featured = () => {

const { data, loading, error } = useFetch(
  "/hotels/countByCity?cities=Lubumbashi,Kinshasa,Goma"
);


  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/730466/pexels-photo-730466.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kinshasa</h1>
              <h2>{data[0]}propriétées</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/3517970/pexels-photo-3517970.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lubumbashi</h1>
              <h2>{data[1]} propriétées</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/10949120/pexels-photo-10949120.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goma</h1>
              <h2>{data[2]} propriétées</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured