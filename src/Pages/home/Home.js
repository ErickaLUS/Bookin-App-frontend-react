import React from 'react'
import "./home.css"
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      <h1 className='homeTitle'>Browse by proporty type</h1>
      </div>
    </div>
  );
}

export default Home