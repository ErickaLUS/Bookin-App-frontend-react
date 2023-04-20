import React from 'react'
import "./home.css"
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'
import PropertyList from '../../Components/property/PropertyList'
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
import axios from 'axios'
import {useEffect} from 'react';
const Home = () => {
  const baseUrl = "/hotels?featured=true&limit=4"
    React.useEffect(() => {
    axios.get(baseUrl).then(response)
      console.log(response)
  }, []);
  
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Parcourir par type de propriétées</h1>
        <PropertyList />
        <h1 className="homeTitle">Parcourir par type de propriétées</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home
