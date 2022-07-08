import React, {useCallback, useEffect, useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { StaticImage } from "gatsby-plugin-image"

//import BGShape3 from "../../../assets/images/bidgemmer/bg-shape03.png";
//import contact from "../../../assets/images/bidgemmer/contact_us.svg";

const captchaSiteKey = "6LfvglEUAAAAAFwK20RNibeH-PetA1BFF_nD14rZ";

const ContactForm = () => {
    const recaptchaRef = React.createRef();
    const formRef = React.createRef<HTMLFormElement>();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const isValid = !!name && !!email && !!phone && !!message && message.length > 3;
        setIsValid(isValid);
    }, [name, email, phone, message]);

    const onSubmit = useCallback(async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            setIsSuccess(null);
            setIsSubmitting(true);
            const token = (recaptchaRef.current as any).getValue();
            if (isValid && !!token && !!formRef.current) {
                const data = new FormData(formRef.current);

                await fetch('https://formspree.io/f/mbjwbpdj', {
                    method: "POST",
                    mode: 'no-cors',
                    body: data
                }).catch(err => {
                    if ((err as Response).status !== 200 && (err as Response).status !== 302) {
                        throw err;
                    }
                });

                if (formRef.current) {
                    formRef.current.reset();
                }
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setIsSuccess(true);
            }
        } catch (err) {
            setIsSuccess(false);
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    }, [isValid, formRef, recaptchaRef]);

    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Send a Message</h2>
                    <p>Your email address will not be published. All fields required.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form ref={formRef} onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <div className="form-floating">
                                                <input type="text" onChange={e => setName(e.target.value)}
                                                       required className="form-control" name="name"
                                                       placeholder="Name"/>
                                                <label htmlFor="name">Full Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <div className="form-floating">
                                                <input type="email" onChange={e => setEmail(e.target.value)}
                                                       required className="form-control" name="email"
                                                       placeholder="Email"/>
                                                <label htmlFor="email">Business Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <div className="form-floating">
                                                <input type="tel" onChange={e => setPhone(e.target.value)}
                                                       required className="form-control" name="phone"
                                                       placeholder="Phone"/>
                                                <label htmlFor="phone">Business Phone</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" onChange={e => setMessage(e.target.value)}
                                                      required autoComplete='false' autoCorrect='true'
                                                      className="form-control" rows={6}
                                                      placeholder="Write your message..."/>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className='form-group mb-3'>
                                            <ReCAPTCHA ref={recaptchaRef} sitekey={captchaSiteKey}/>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="default-btn" disabled={isSubmitting || !isValid}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {isSuccess === true &&
                                <p className='text-success'>Thank you for your message. We will contact you back as soon
                                    as possible.</p>}
                                {isSuccess === false &&
                                <p className='text-danger'>Something happened... Please try again.</p>}
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-image d-none d-md-block">
                        <StaticImage src="../../../assets/images/bidgemmer/contact_us.svg" width={546} height={274} alt="contact" />
                            {/* <img loading="lazy" src={contact} alt="contact"/> */}
                            <div className="shape">
                            <StaticImage src="../../../assets/images/bidgemmer/bg-shape03.png" width={561} height={402} alt="image" />
                            
                                {/* <img loading="lazy" src={BGShape3} alt="image"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactForm;