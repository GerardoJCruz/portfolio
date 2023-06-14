import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className='header-info'>
            <h1 className='header-title'> Who am I?</h1>
            <Typed
                    strings={[
                        'Junior web developer ready to fuel business growth', 'through innovation', '']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop 
                />
        </div>
    )
}

export default Header
