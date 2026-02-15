import React from 'react';
import { Bio } from '../../data/constants';

const Contact: React.FC = () => {
    return (
        <div className="contact-section py-5">
            <h6 className="text-accent mb-2">Get In Touch</h6>
            <h2 className="display-4 fw-bold mb-5">Let's Create <span className="text-outline">Something</span></h2>

            <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="contact-info bg-card p-4 rounded-4 border border-white-10 h-100">
                        <div className="mb-4">
                            <h4 className="h6 text-accent text-uppercase mb-2">Email</h4>
                            <p className="fs-5" style={{ color: 'var(--text-main)' }}>{Bio.email || 'dale.lanto@example.com'}</p>

                        </div>
                        <div className="mb-4">
                            <h4 className="h6 text-accent text-uppercase mb-2">Address</h4>
                            <p className="fs-5" style={{ color: 'var(--text-main)' }}>Manila, Philippines</p>

                        </div>
                        <div>
                            <h4 className="h6 text-accent text-uppercase mb-2">Support</h4>
                            <p className="text-muted">Available for 24/7 collaborations</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <form className="contact-form bg-card p-4 rounded-4 border border-white-10">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control p-3 rounded-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }} placeholder="Full Name" />

                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control p-3 rounded-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }} placeholder="Email Address" />

                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control p-3 rounded-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }} placeholder="Subject" />

                            </div>
                            <div className="col-12">
                                <textarea className="form-control p-3 rounded-3" style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }} rows={5} placeholder="Your Message"></textarea>

                            </div>
                            <div className="col-12 mt-4">
                                <button type="submit" className="btn-primary-custom w-100 py-3 rounded-pill fw-bold text-uppercase border-0">Send Message</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
