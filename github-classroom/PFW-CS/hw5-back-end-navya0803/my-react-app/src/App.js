import React, { useEffect, useState, createContext } from 'react';
import './App.css';

// import ContactUs from './ContactUS';
import AboutUs from './AboutUS';
import Aboutusdata from './Aboutusdata';
// import Homebody from './Homebody';
import Contact from './Contact';
import Newsletter from './NewsLetter';
import Products from './Products';
// import GalleryImages from './GalleryImages';
import Contactusdata from './Contactusdata';
import FileUpload from './FileUpload';

// import { useContext} from 'react';
// import { UserContext } from './AboutUS';
// import Aboutusdata from './Aboutusdata';
export const UserContext= createContext();

function App() {
  const data = "Are you ready to embark on an unforgettable Fashion Hub journey? Welcome to the world of top fashion websites, where you can stay up-to-date with all the latest trends. Whether you're looking for something stylish or want to browse through hundreds of new looks and ideas, our online selection is here to help.";
  const [Clickaboutus, setClickaboutus]=useState("Home");

  function handleContactus (event) {
    event.preventDefault();
    setClickaboutus("ContactUS");
    console.log(Clickaboutus);
  }
  // const Clickaboutus=useContext(UserContext);
  useEffect (() => {console.log(Clickaboutus);},[Clickaboutus]);


  if (Clickaboutus === "Home") {
    return (
      <div className="App">
        <header>
            <h1>NK's Fashion Hub</h1>
            <nav className="menubar">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li><a href="#products">Products</a></li>
            </ul>
            </nav>
            <img src="logoNK-png.png" alt="NK" width="150" height="150" ></img>
        </header>

        <main>
            <section id="about">
            <h2>About Website</h2>
            <p>{data}</p>
            </section>

            <Contact />
            {/* <GalleryImages /> */}
            <Products />
            <Newsletter />
            <FileUpload />
            
        </main>
        <footer>
        <section id="AboutUs">
          <UserContext.Provider value={{Clickaboutus, setClickaboutus}}>
            {/* {Clickaboutus?<Aboutusdata />:<AboutUs />} */}
            <AboutUs /> 
            </UserContext.Provider>
             </section>
            <section id="Contact">
            <div> 
              <a href="contactus.html" onClick={handleContactus} >Contact Us</a>
          </div>
             </section>  
  
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="facebook.jpg" alt="Facebook" width="20" height="20" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="instagram.jpg" alt="Instagram" width="25" height="20" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
else if (Clickaboutus === "AboutUS") {
  return (
    <UserContext.Provider value={{Clickaboutus, setClickaboutus}}>
            {/* {Clickaboutus?<Aboutusdata />:<AboutUs />} */}
            <Aboutusdata />
    </UserContext.Provider>
  );
}
else if (Clickaboutus === "ContactUS") {
  return (
  // <UserContext.Provider value={{Clickaboutus, setClickaboutus}}>
            
  <UserContext.Provider value={{Clickaboutus, setClickaboutus}}>
            <div>
              <Contactusdata />
            </div>
  </UserContext.Provider>
  );
}
  
}

export default App;

// function formvalidate() {
//   const name = document.querySelector('#name').value;
//   const email = document.querySelector('#email').value;
//   console.log('Name:', name);
//   console.log('Email:', email);
// }
