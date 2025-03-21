import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Form validation
    const validateForm = () => {
        const errors = {};
        if (!name.trim()) errors.name = "Name is required";
        if (!email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
        if (!message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        setFormErrors({});
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', { name, email, message });
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Reset form
            setTimeout(() => {
                setName('');
                setEmail('');
                setMessage('');
                setSubmitSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
                    
                    <div className="contact-method">
                        <i className="fas fa-envelope"></i>
                        <span>tu@email.com</span>
                    </div>
                    
                    <div className="contact-method">
                        <i className="fas fa-phone"></i>
                        <span>+34 123 456 789</span>
                    </div>
                    
                    <div className="contact-method">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Madrid, España</span>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://github.com/Damagasnake" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={`contact-form ${isSubmitting ? 'submitting' : ''} ${submitSuccess ? 'success' : ''}`}>
                    {submitSuccess ? (
                        <div className="success-message">
                            <i className="fas fa-check-circle"></i>
                            <p>Thank you! Your message has been sent.</p>
                        </div>
                    ) : (
                        <>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={formErrors.name ? 'error' : ''}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your name"
                                    disabled={isSubmitting}
                                    required
                                />
                                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={formErrors.email ? 'error' : ''}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                    disabled={isSubmitting}
                                    required
                                />
                                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    className={formErrors.message ? 'error' : ''}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message here..."
                                    disabled={isSubmitting}
                                    required
                                ></textarea>
                                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                            </div>
                            
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="loading-spinner"></span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;