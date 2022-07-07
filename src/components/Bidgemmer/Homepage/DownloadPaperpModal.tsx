import React, {useCallback, useEffect, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const captchaSiteKey = "6LfvglEUAAAAAFwK20RNibeH-PetA1BFF_nD14rZ";

const DownloadPaperModal = ({
                                show = true, onHide = () => {
    }
                            }) => {

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

    const onSubmit = useCallback(async () => {
        try {
            setIsSubmitting(true);
            const token = (recaptchaRef.current as any).getValue();
            if (isValid && !!token && !!formRef.current) {
                const data = new FormData(formRef.current);

                await fetch('https://formspree.io/f/xyyovgvl', {
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
        } finally {
            setIsSubmitting(false);
        }
    }, [isValid, recaptchaRef, formRef]);

    return (
        <div className="modal"
             tabIndex={-1}
             style={{display: show ? 'block' : 'none'}}>
            <div className="modal-dialog modal-lg"
                 style={{marginTop: 150}}>
                <div className="modal-content">
                    <form ref={formRef} onSubmit={onSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">
                                The True Cost of Building Your Enterprise Auction Platform
                            </h5>
                            <button type="button" className="btn close" aria-label="Close"
                                    onClick={onHide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                In this FREE whitepaper, you'll uncover how organizations can evaluate the true cost of
                                implementing an online auction platform.

                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className='form-group mb-3'>
                                        <div className="form-floating">
                                            <input type="text" onChange={e => setName(e.target.value)}
                                                   required className="form-control" name="name" placeholder="Name"/>
                                            <label htmlFor="name">Your Name (required)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className='form-group mb-3'>
                                        <div className="form-floating">
                                            <input type="email" onChange={e => setEmail(e.target.value)}
                                                   required className="form-control" name="email" placeholder="Email"/>
                                            <label htmlFor="email">Business Email (required)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-3 form-text'>
                                    Privacy Policy: We hate spam and promise to keep your email address safe
                                </div>

                                <div className='col-12'>
                                    <div className='form-group mb-3'>
                                        <ReCAPTCHA ref={recaptchaRef} sitekey={captchaSiteKey}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between align-items-center">
                            <div>
                                {isSuccess === true &&
                                <p className='text-success'>Thank you for your request. Your whitepaper is on its
                                    way!</p>}
                                {isSuccess === false &&
                                <p className='text-danger'>Something happened... Please try again.</p>}
                            </div>
                            <div>
                                <button type="button" className="btn btn-link text-dark" onClick={onHide}>Close</button>
                                {isSuccess !== true &&
                                <button type="submit" disabled={isSubmitting || !isValid} className="btn default-btn">
                                    Send it to me
                                </button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DownloadPaperModal;