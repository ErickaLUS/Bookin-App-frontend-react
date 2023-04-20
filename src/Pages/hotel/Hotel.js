import React from 'react'
import './hotel.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext ,useState } from 'react';
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from '../../Hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../Components/reserve/Reserve';

const Hotel = () => {

  const [slideNumber, setSlideNumber]= useState(0)
   const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
  const location=useLocation()
 const id = location.pathname.split("/")[2];
 
   const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`);
  
  const { dates, options } = useContext(SearchContext);
const { user } = useContext(AuthContext);
const navigate = useNavigate()
  
  const MILLISECONDS_PER_DAY= 1000*60*60*24;
  function dayDifference(date1,date2){
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays
  }
  const days = (dayDifference(dates[0]?.endDate, dates[0]?.startDate));
   
  const handleOpen= (i)=>{
     setSlideNumber(i);
     setOpen(true)

   }
   const handleMove = (direction)=>{
      let newSlideNumber
      if (direction==='l'){
        newSlideNumber=slideNumber===0? 5:slideNumber-1
      }else{
         newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber)
   }
      
const handleClick = ()=>{
  if(user){
    setOpenModal(true)
  }else{
    navigate("/login")
  }

}

  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">réserver ou revenir maintenant</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAdress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent emplacement {data.distance}m du centre
            </span>
            <span className="hotelPriceHightlight">
              Réservez un séjour de plus de {data.cheapestPrice}$ans cet
              établissement et obtenez un taxi gratuit pour l'aéroport
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Parfait pour un séjour de {days} nuits!</h1>
                <span>
                  Situé en plein cœur de Kinshasa, cet établissement a un
                  excellent score de localisation de 9,0
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nuits)
                </h2>
                <button onClick={handleClick}>
                  réserver ou revenir maintenant
                </button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
}

export default Hotel