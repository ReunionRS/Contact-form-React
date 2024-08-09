import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await emailjs.send(
                'service_453aznf',
                'template_hhbwdzu',
                {
                    to: 'reunionworkshopnoreply@gmail.com', // Адрес получателя
                    from: email, // Email отправителя
                    message: message,
                },
                'epN1ICeN8kHf9smRr'
            );
            setSent(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>Контактная форма</h2>
            <div>
                <label htmlFor="email">Ваш Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                />
            </div>
            <div>
                <label htmlFor="message">Сообщение:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="textarea-field"
                />
            </div>
            <button type="submit" className="submit-button">Отправить</button>
            {sent && <p className="success-message">Сообщение успешно отправлено!</p>}
        </form>
    );
};

export default ContactForm;