import React, { useEffect } from 'react';
import backgroundImage from '../images/utah-bg.jpg'; // Make sure to provide the correct path to the background image

function Header() {
    useEffect(()=>{
        //Preload the background image
        const img = new Image();
        img.src = backgroundImage;
    }, []);

    return (
        <div className='header'>
            <div className='header-bg' style={{ backgroundImage: `url(${backgroundImage})`}} loading="lazy">
                {/* Add a pseudo-element with the gradient to create a filter*/}
                <div className="gradient-overlay"></div>
            </div>
            <div className='header-info'>
                <h1 className='header-title'> Who am I?</h1>
                <p>
                    I am a front-end web developer ready to fuel business growth through innovation
                </p>
            </div>
        </div>
    );
}

export default Header;