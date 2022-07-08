import React, {useCallback, useEffect, useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { StaticImage } from "gatsby-plugin-image"

//import bgImage1 from '../../../assets/images/bidgemmer/bg-image-01.png';

const captchaSiteKey = "6LfvglEUAAAAAFwK20RNibeH-PetA1BFF_nD14rZ";

const DemoForm = () => {
    const recaptchaRef = React.createRef();
    const formRef = React.createRef<HTMLFormElement>();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const isValid = !!name && !!email;
        setIsValid(isValid);
    }, [name, email]);

    const onSubmit = useCallback(async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            setIsSuccess(null);
            setIsSubmitting(true);
            const token = (recaptchaRef.current as any).getValue();
            if (isValid && !!token && !!formRef.current) {
                const data = new FormData(formRef.current);

                await fetch('https://formspree.io/f/xlezvrvo', {
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
        <div className="seo-analysis-section ptb-100" id='request-demo'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="analysis-img">
                         <StaticImage src="../../../assets/images/bidgemmer/bg-image-01.png" width={546} height={533} alt="analysis" /> 
                            {/* <img loading="lazy" src={bgImage1} alt="analysis"/> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="analysis-form">
                            <span className="sub-title">Get Started Today!</span>
                            <h2>Request a Demo</h2>
                            <p>Let BidGemmer help you manage your auctions. Sign up today and start generating
                                substantially more revenue from your diamond, gemstone, or jewellery sales.</p>

                            <form ref={formRef} onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <div className="form-floating">
                                                <input type="text" onChange={e => setName(e.target.value)}
                                                       required className="form-control" name="name"
                                                       placeholder="Name"/>
                                                <label htmlFor="name">Your Name (required)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className='form-group mb-3'>
                                            <div className="form-floating">
                                                <input type="email" onChange={e => setEmail(e.target.value)}
                                                       required className="form-control" name="email"
                                                       placeholder="Email"/>
                                                <label htmlFor="email">Business Email (required)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className='form-group mb-3'>
                                            <ReCAPTCHA ref={recaptchaRef} sitekey={captchaSiteKey}/>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="default-btn" disabled={isSubmitting || !isValid}>
                                    {isSubmitting ? 'Sending...' : 'Send Request'}
                                </button>

                                {isSuccess === true &&
                                <p className='text-success'>Thank you for your request. Our team will be in touch with
                                    you.</p>}
                                {isSuccess === false &&
                                <p className='text-danger'>Something happened... Please try again.</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DemoForm;