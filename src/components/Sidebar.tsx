import React from 'react';
import { Bio } from '../data/constants';
import { FaGithub, FaLinkedin, FaFacebook, FaDev } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-card">
            <div className="text-start">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="sidebar-icon-box" style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '15px',
                        border: '1px solid var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-color)',
                        fontSize: '1.5rem'
                    }}>
                        🐱
                    </div>
                    <div>
                        <h1 className="fs-2 fw-bold mb-0" style={{ lineHeight: '1.2', color: 'var(--text-main)' }}>
                            {Bio.name.split(' ')[0] + " " + Bio.name.split(' ')[1]}
                        </h1>
                    </div>
                </div>

                <div className="avatar-wrapper mx-auto mb-4">
                    <img
                        src="/HeroImage.jpg"
                        alt={Bio.name}
                        className="avatar-img shadow-sm"
                    />
                </div>

                <div className="mb-4">
                    <p className="text-muted small mb-1">Specialization:</p>
                    <h5 className="fw-bold mb-0" style={{ color: 'var(--text-main)' }}>
                        {Bio.roles[0]} <br />
                    </h5>
                </div>

                <div className="mb-4">
                    <p className="text-muted small mb-2">Roles:</p>
                    <div className="d-flex flex-wrap gap-2">
                        {Bio.roles.slice(1).map((role, index) => {
                            const colors = ['#4ade80', '#60a5fa', '#fbbf24', '#f87171', '#a78bfa'];
                            const color = colors[index % colors.length];
                            return (
                                <div key={index} className="role-badge">
                                    <span className="role-bullet" style={{ backgroundColor: color }}></span>
                                    {role}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-muted small mb-1">Based in:</p>
                    <h5 className="fw-bold" style={{ color: 'var(--text-main)' }}>Philippines</h5>
                </div>


                <div className="social-links d-flex justify-content-center gap-3 mb-4">
                    <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="social-link-circle">
                        <FaGithub size={18} />
                    </a>
                    <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-circle">
                        <FaLinkedin size={18} />
                    </a>
                    <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="social-link-circle">
                        <FaFacebook size={18} />
                    </a>
                    <a href={Bio.devto} target="_blank" rel="noopener noreferrer" className="social-link-circle">
                        <FaDev size={18} />
                    </a>
                </div>
            </div>

            <div className="cta-section mt-auto">
                <a href="mailto:dalelanto.work@gmail.com" className="btn-primary-custom w-100 py-3 text-uppercase letter-spacing-1 d-block text-center text-decoration-none">
                    Let's Work Together!
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
