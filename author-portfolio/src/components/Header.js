import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
const style={
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
}

    return(
        <div>
            <h3 style={style}><Link to='/' style={{ color: '#000' }} >Home</Link></h3>
            <h3 style={style}><Link to='/jewelry' style={{ color: '#000' }} >Jewelry Portfolio</Link></h3>
            <h3 style={style}><Link to='/books' style={{ color: '#000' }} >Books</Link></h3>
            <h3 style={style}><Link to='/blog' style={{ color: '#000' }} >Blog</Link></h3>
        </div>
    )
}

export default Header;