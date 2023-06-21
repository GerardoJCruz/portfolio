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
                <p>Hello, I am a self-taught front-end web developer with a strong command of the Spanish language. Proficient in HTML, CSS, JavaScript, Bootstrap, Sass, ReactJS, Git, and GitHub, I am eager to contribute to the growth of your business. I firmly believe that practice and experience are key to becoming an expert. I approach every challenge with confidence, always striving to improve my skills. As a team player, I value collaboration and believe in the power of collective effort. I am dedicated to providing value to you through my skills,  and hard work. With a mindset focused on continuous learning and, I am ready to take on new opportunities and make a positive impact.</p>
                <br/>
                <p>Hola, soy un desarrollador web front-end autodidacta con amplio conocimiento del idioma español. Tengo experiencia en HTML, CSS, JavaScript, Bootstrap, Sass, ReactJS, Git y GitHub, y estoy deseoso de contribuir al crecimiento de tu negocio. Creo firmemente que la práctica y la experiencia son fundamentales para convertirse en un experto. Abordo cada desafío con confianza, siempre buscando mejorar mis habilidades. Como miembro colaborador de equipos de trabajo, valoro la colaboración y creo en el poder del esfuerzo colectivo. Me dedico a aportar valor hacia ti a través de mis habilidades y trabajo arduo. Con una mentalidad enfocada en el aprendizaje continuo, estoy listo para asumir nuevas oportunidades y generar un impacto positivo.</p>
            </div>
        </div>
    )
}

export default AboutMe
