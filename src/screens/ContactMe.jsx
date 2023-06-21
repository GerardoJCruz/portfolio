import React from 'react'
import { navigationLinks } from '../helpers/navigationLinks'

function createLinks(){
    return navigationLinks.map((e, idx) =>(
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
    return (
        <div className='contactMe__container' id='contact'>
            <div className='contactMe__data__links'>
                <div className='contactMe__contact'>
                    <p>Gerardo J. Cruz</p>
                    <p>gerardojcruz98@gmail.com</p>
                    <p><a style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/javier-cruz-914b811b1/' target="_blank" rel="noreferrer">Contact by LinkedIn</a></p>
                    <p><a style={{textDecoration: 'none'}} href='https://arc.dev/@gjaviercruz' target="_blank" rel="noreferrer">Contact by Arc.dev</a></p>
                    <p>I'm living in Utah, U.S.A.</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{textAlign: 'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
    )
}

export default ContactMe
