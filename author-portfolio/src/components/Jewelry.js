import React from 'react';
import JEWELRYGALLERIES from '../data/jewelry_gallery';
import Header from './Header';
import '../css/jewelry_main.css';
import {Route, Link} from 'react-router-dom';
import JewelryGallery from './JewelryGallery';

const Jewelry = props =>{
    const{image, text, keyword} = props.jewelry;
    return(
        <div>
            <img src ={image} alt='jewelry' className="image"/>
            <div className="middle">
                <div className="text">{text}</div>
            </div>
        </div>
        
    )
}

const Jewelries = () =>(
   
    <div>
        <Header />
        <div className="frosted">
        <p>hook up individual galleries or see if can link</p>
        <p>change album photos to own</p>
        <p>blurb about commission info, maybe a read more...</p>
        </div>
        <div>
            {
                JEWELRYGALLERIES.map(JEWELRY =>{
                    return(
                    <div className="container">
                        <Link to={`/jewelry/${JEWELRY.keyword}`}>
                        <Jewelry key = {JEWELRY.id} jewelry={JEWELRY} />
                        </Link>
                    </div>
                )})
            }
            <Route path={`/jewelry/:keyword`} component={JewelryGallery}/>
         </div> 
    </div>
   
    
)

export default Jewelries;