import React, { useContext } from 'react';
import { UserContext } from './App';
import axios from 'axios';

function AboutUs() {
  const { setClickaboutus } = useContext(UserContext);

  const clicked = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the server to handle 'About Us' click
      const response = await axios.post('http://localhost:3000/about-us-clicked');
      setClickaboutus(response.data.message);
    } catch (error) {
      console.error('Error handling About Us click:', error);
    }
  };

  return (
    <div>
      <a href="aboutus.html" onClick={clicked}>
        About Us
      </a>
    </div>
  );
}

export default AboutUs;
