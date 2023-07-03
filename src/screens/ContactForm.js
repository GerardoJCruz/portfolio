import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FomrFields({ state }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setIsVisible(true);
            const timmeout = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timmeout);
        }
    }, [state.succeeded])

    return (
        <>
            {isVisible && <p className='contactForm__succeded-alert'>Contact shared successfully</p>}
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="message" className='contactForm__message'>
                <span>Lets start a project together</span>, write your message or share me your idea.
            </label>
            <textarea id="message" name="message" className='contactForm__message__input' />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting} className='contactForm__button'>
                Submit
            </button>
        </>
    )
}

function ContactForm() {
    const [state, handleSubmit] = useForm("xyyqgbdo");


    return (
        <form onSubmit={handleSubmit} className='contactForm' id='contact'>
            {state.succeeded ? (

                <>
                    <FomrFields state={state} />
                </>
            ) : (
                <FomrFields state={state} />
            )}
        </form>
    );
}

function App() {
    return <ContactForm />;
}

export default App;