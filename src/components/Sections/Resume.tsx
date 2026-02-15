import React from 'react';
import styled from 'styled-components';
import { experiences, education } from '../../data/constants';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: var(--text-main);
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: var(--text-muted);
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Resume: React.FC = () => {
    return (
        <Container id="resume">
            <Wrapper>
                <div className="text-center">
                    <h6 className="text-accent mb-2">Qualifications</h6>
                    <Title>Experience & <span className="text-outline">Education</span></Title>
                    <Desc>
                        My professional journey and educational background.
                    </Desc>
                </div>

                <TimelineSection>
                    <h3 id="experience" className="h4 mt-5 mb-4 border-bottom border-white-10 pb-2 w-100 text-center" style={{ color: 'var(--text-main)' }}>Experience</h3>
                    <Timeline position="right">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={experience.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" style={{ borderColor: 'var(--primary-color)' }} />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: 'var(--primary-color)' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                    <h3 id="education" className="h4 mt-5 mb-4 border-bottom border-white-10 pb-2 w-100 text-center" style={{ color: 'var(--text-main)' }}>Education</h3>
                    <Timeline position="right">
                        {education.map((edu, index) => (
                            <TimelineItem key={edu.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" style={{ borderColor: 'var(--primary-hover)' }} />
                                    {index !== education.length - 1 && (
                                        <TimelineConnector style={{ background: 'var(--primary-hover)' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Resume;
