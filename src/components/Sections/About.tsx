import React from 'react';
import { Bio } from '../../data/constants';

const About: React.FC = () => {
    return (
        <div id="about" className="about-section py-5">
            <div className="mb-5">
                <div className="badge-outline mb-3">
                    <span className="text-secondary opacity-75">✦</span> About Me
                </div>
                <h2 className="display-4 fw-bold mb-4" style={{ color: 'var(--text-main)', maxWidth: '800px' }}>
                    Refining complexity. <br />
                    <span className="text-outline">Designing simplicity.</span>
                </h2>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="stat-card">
                        <div className="stat-number">{Bio.stats.happyClients}</div>
                        <div className="stat-label">Happy clients</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stat-card">
                        <div className="stat-number">{Bio.stats.yearsExperience}</div>
                        <div className="stat-label">Years of experience</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="stat-card">
                        <div className="stat-number">{Bio.stats.projectsDone}</div>
                        <div className="stat-label">Projects done</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                    <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.7' }}>
                        {Bio.aboutParagraph1}
                    </p>
                    <p className="fs-5 text-muted mb-5" style={{ lineHeight: '1.7' }}>
                        {Bio.aboutParagraph2}
                    </p>
                    <div className="mt-4">
                        <a href={Bio.resume} target="_blank" rel="noreferrer" className="btn btn-primary-custom px-4 py-2">
                            Download CV <i className="bi bi-download ms-2"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 ps-lg-5">
                    <div className="info-list">
                        <div className="info-list-item">
                            <span className="info-label">Name</span>
                            <span className="info-value">{Bio.fullname}</span>
                        </div>
                        <div className="info-list-item">
                            <span className="info-label">Email</span>
                            <span className="info-value">{Bio.email}</span>
                        </div>
                        <div className="info-list-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">{Bio.location}</span> {/* Placeholder or needs constant */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
