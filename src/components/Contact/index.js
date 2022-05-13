import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState);
    }


    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email" >Email Address:</label>
                    <input type="text" defaultValue={email} name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message" >Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;