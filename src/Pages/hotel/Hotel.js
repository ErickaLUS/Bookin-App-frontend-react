import React from 'react'
import './hotel.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";



const Hotel = () => {

  const [slideNumber, setSlideNumber]= useState(0)
   const [open, setOpen] = useState(false);
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
const photos = [
  {
    src: "https://images.pexels.com/photos/14524359/pexels-photo-14524359.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/14532723/pexels-photo-14532723.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/14532723/pexels-photo-14532723.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/14532723/pexels-photo-14532723.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/14532723/pexels-photo-14532723.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/14532723/pexels-photo-14532723.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Back Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ellan st 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location 58m from center
          </span>
          <span className="hotelPriceHightlight">
            Book a stay over $14 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this proporty has an
                excellent location score location score of 9.0
              </span>
              <h2>
                <b>$956</b> (9 night)
              </h2>
              <button>Reserve or Back Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel