import React from 'react'
import './propertyList.css'
import useFetch from '../../Hooks/useFetch';
const PropertyList = () => {

  const { data, loading, error } = useFetch( "/hotels/countByType");
  
  const images = [
    "https://images.pexels.com/photos/7502450/pexels-photo-7502450.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2413838/pexels-photo-2413838.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2945692/pexels-photo-2945692.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/12949628/pexels-photo-12949628.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];


  return (
    <div className="propertyList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="propertyListItem" key={i}>
                <img src={img} 
                alt="" 
                className="propertyListImg" />
                <div className="propertyListTitle">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList