import React from 'react';
import Header from './Header';
import '../css/gallery.css';
import '../css/lightbox.min.css';
import '../css/jewelry_main.css';


const BeadedJewelry = () =>{
    return(
        <div>
        <Header />
        <div class="frosted">
        <p>BACK BUTTON AND NAV</p>
        </div>
        <div class="gallery">
            <a href="assets/images/blue_pendant.jpg" data-lightbox="mygallery"><img src="assets/images/thumb_blue_pendant.jpg" /></a>
            <a href="assets/images/green_pendant.jpg" data-lightbox="mygallery"><img src="assets/images/thumb_green_pendant.jpg"/></a>
            <a href="assets/images/pink_pendant.jpg" data-lightbox="mygallery"><img src="assets/images/thumb_pink_pendant.jpg"/></a>
            <a href="assets/images/white_pendant.jpg" data-lightbox="mygallery"><img src="assets/images/thumb_white_pendant.jpg"/></a>
       </div>
       <script src="lightbox-plus-jquery.min.js"></script>
       </div>
    );
}

export default BeadedJewelry;