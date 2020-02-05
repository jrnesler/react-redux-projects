import React from 'react';
import '../css/gallery.css';
import '../css/jewelry_main.css';
import GALLERIES from '../data/galleries';
import SimpleReactLightbox from "simple-react-lightbox"; 
import { SRLWrapper } from "simple-react-lightbox";
import {Link } from 'react-router-dom';

const Gallery = props =>{
    const{thumbnail, url, title } = props.subgallery;
    return(
        <div className="gallery">
            <a href={url} data-attribute="SRL">
            <img src={thumbnail} alt={title} />
            </a>
        </div>
    )
}

const JewelryGallery = ({match}) =>{
const gallery = GALLERIES.find(({ id }) => id === match.params.keyword)
    return(
        <div>
        <div className="frosted">
        <p>{gallery.description}</p>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper>
            {
                gallery.resources.map((SUBGALLERY) =>{
                    return(
                        <Gallery key = {SUBGALLERY.id} subgallery={SUBGALLERY} />
                    )
                })
            }
            </SRLWrapper>
            </SimpleReactLightbox>
       </div>
    );
    
}

export default JewelryGallery;