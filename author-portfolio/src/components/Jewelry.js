import React from 'react';
import JEWELRYGALLERIES from '../data/jewelry_gallery';
import Header from './Header';
import '../css/jewelry_main.css';


const Jewelry = props =>{
    const{image, text} = props.jewelry;
    return(
        <div>
            <img src ={image} alt='jewelry' class="image"/>
            <div class="middle">
                <div class="text">{text}</div>
            </div>
        </div>
    )
}

const Jewelries = () =>(
    
    <div>
        <Header />
        <div class="frosted">
        <p>hook up individual galleries or see if can link</p>
        <p>change album photos to own</p>
        <p>blurb about commission info, maybe a read more...</p>
        </div>
        <div>
            {
                JEWELRYGALLERIES.map(JEWELRY =>{
                    return(
                    <div class="container">
                        <Jewelry key = {JEWELRY.id} jewelry={JEWELRY} />
                    </div>
                )})
            }
            </div>
    </div>
    
)

export default Jewelries;