import React from 'react';
import backgroundImage from '../images/utah-bg.jpg'; // Make sure to provide the correct path to the background image

function Header() {
    return (
        <div className='header'>
            <div className='header-bg' style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/* Add the pseudo-element with the gradient */}
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