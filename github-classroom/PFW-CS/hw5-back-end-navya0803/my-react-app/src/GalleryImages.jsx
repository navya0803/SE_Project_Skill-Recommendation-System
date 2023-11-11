import React from 'react';

function ImageGallery() {
  return (
    
      <section id="gallery">
        <h2>Image Gallery</h2>
        <ul className="image-gallery">
          <li>
            <img src="/api/image1" alt="Gallery1" width="100" height="100" />
          </li>
          <li>
            <img src="/api/image2" alt="Gallery2" width="125" height="125" />
          </li>
          <li>
            <img src="/api/image4" alt="Gallery3" width="250" height="250" />
          </li>
        </ul>
      </section>
    );
  }


export default ImageGallery;
