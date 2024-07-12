import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/home.jpg';

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Tahta Arya Pamungkas-A11.2021.13900</h1>
      <img src={HomeImage} alt="Home" className="img-fluid" />
      <Link to="/students" className="btn btn-primary mt-3">Go to absen</Link>
    </div>
  );
};

export default HomePage;
