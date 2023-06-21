import React from 'react'
import person from '../images/person.jpg'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
            <div>   
                <img src={person} alt="perfil icon" />
            </div>
            <div className="about__text">
                <h1>ABOUT ME</h1>
                <p>I am a front-end web developer with expertise in HTML, JS, CSS, Bootstrap, ReactJs, SASS, GitHub and Git. Fluent in Spanish, I bring a strong skill set and a passion for web development. Ready to collaborate and contribute to your business growth, I am dedicated to delivering high-quality solutions that align with your goals. With a focus on continuous learning and staying up-to-date with industry trends, I am committed to driving innovation and achieving success in your projects.</p>
                <br/>
                <p>Soy un desarrollador web front-end con conocimientos en HTML, JS, CSS, Bootstrap, ReactJs, SASS, GitHub y Git. Hablo español fluido y tengo una gran pasión por el desarrollo web. Listo para colaborar y contribuir al crecimiento de tu negocio, me dedico a ofrecer soluciones de alta calidad que se alinean con tus objetivos.</p>
            </div>
        </div>
    )
}

export default AboutMe
