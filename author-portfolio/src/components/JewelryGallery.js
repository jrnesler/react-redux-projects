
import React, { Fragment } from 'react';
import '../css/gallery.css';
import '../css/jewelry_main.css';
import GALLERIES from '../data/galleries';
import BEADGALLERY from '../data/beadwork_gallery';
import WIREGALLERY from '../data/wirework_gallery';
import DICEGALLERY from '../data/dice_gallery';
import Gallery from 'react-grid-gallery';


function gallerySwtich(param) {
    switch(param){
        case 'dice':
            return (<div className="gallery">
            <Gallery images={DICEGALLERY}   enableImageSelection={false}/>
        </div>);
        case 'beadwork':
            return ( <div className="gallery">
            <Gallery images={BEADGALLERY}   enableImageSelection={false}/>
        </div>);
        case 'wirewrapped':
            return ( <div className="gallery">
            <Gallery images={WIREGALLERY}   enableImageSelection={false}/>
        </div>);
    }
}

//TODO this will become a database call to find and retrieve all relivant gallery information based on keyword
//then render it w/ a lightbox appropriately
const JewelryGallery = ({match}) =>{
    const gallery = GALLERIES.find(({ id }) => id === match.params.keyword) 
        {
            return(
            <div>
            <div className="frosted">
            <p>{gallery.description}</p>
            </div>
                {
                    gallerySwtich(match.params.keyword)
                
                }
            </div>  
            )
        }
    };


export default JewelryGallery;