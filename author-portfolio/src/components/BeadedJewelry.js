import React from 'react';
import '../css/gallery.css';
import '../css/jewelry_main.css';
import BEADWORKGALLERY from '../data/beadwork';
import SimpleReactLightbox from "simple-react-lightbox"; 
import { SRLWrapper } from "simple-react-lightbox";

const Beadwork = props =>{
    const{thumbnail, url, title } = props.beadwork;
    return(
        <div className="gallery">
            <a href={url} data-attribute="SRL">
            <img src={thumbnail} alt={title} />
            </a>
        </div>
    )
}


const BeadedJewelry = () =>{
    return(
        <div>
        <div className="frosted">
        <p>info</p>
        <p>TODO LIGHTBOX</p>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper>
            {
                BEADWORKGALLERY.map(BEADWORK =>{
                    return(
                        <Beadwork key = {BEADWORK.id} beadwork={BEADWORK} />
                    )
                })
            }
            </SRLWrapper>
            </SimpleReactLightbox>
       </div>
    );
}

export default BeadedJewelry;