import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../helpers/navigationLinks'

const createLinks = () => {
    return navigationLinks.map((e, idx) => <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>)
}

function Navigation() {
    return (
        <div id="home">
            <Navbar className='navigation__container' 
                style={{zIndex: '2', position: 'fixed', top: '0', width: '100%'}}
                collapseOnSelect
                expand='md'>
                <Navbar.Brand style={{marginLeft: '1rem', fontWeight: '700', fontSize: '2.5rem'}}  href='#home'>&#60;Gerardo J. Cruz/&#62;</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' style={{border: '1px solid white', marginRight: '5px'}}/>
                <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none', fontSize: '1.5rem'}}>
                    <Nav className='links' style={{margin: '0 1rem', paddingInline: '2px'}}>
                    {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
