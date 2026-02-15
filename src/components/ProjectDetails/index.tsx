import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Wrapper = styled.div`
    max-width: 800px;
    width: 100%;
    max-height: 96vh;
    border-radius: 16px;
    margin: 20px 12px;
    background-color: var(--bg-card);
    color: var(--text-main);
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid var(--glass-border);
    box-shadow: var(--card-shadow);
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: var(--text-main);
    margin: 8px 6px 0px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 24px;
        margin: 6px 6px 0px 6px;
    }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: var(--text-muted);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: var(--text-main);
    margin: 8px 6px;
    line-height: 1.6;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 8px;

    /* Custom Scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--glass-border);
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: var(--text-muted);
    }

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
        max-height: 300px;
    }
`;

const Image = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        max-height: 250px;
    }
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: var(--text-main);
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: var(--primary-color);
    margin: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: var(--glass-button-bg);
    border: 1px solid var(--badge-border);
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: var(--text-main);
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    gap: 12px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Button = styled.a<{ dull?: boolean }>`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ dull }) => (dull ? 'var(--text-muted)' : 'white')};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ dull }) => (dull ? 'var(--badge-bg)' : 'var(--primary-color)')};
    border: 1px solid ${({ dull }) => (dull ? 'var(--glass-border)' : 'transparent')};
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-smooth);
    &:hover {
        background-color: ${({ dull }) => (dull ? 'var(--glass-button-bg)' : 'var(--primary-hover)')};
        transform: translateY(-2px);
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

import { Project } from '../../types/project';

interface Props {
    openModal: {
        state: boolean;
        project: Project | null;
    };
    setOpenModal: (val: { state: boolean; project: Project | null }) => void;
}

const ProjectDetails: React.FC<Props> = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    return (
        <Modal open={openModal.state} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                            color: "var(--text-main)",
                            zIndex: 10
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project?.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member, index) => (
                                    <Member key={index}>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        {project?.github && (
                            <Button dull href={project?.github} target='new'>
                                View Code
                            </Button>
                        )}
                        {project?.webapp && (
                            <Button href={project?.webapp} target='new'>
                                View Live
                            </Button>
                        )}
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    );
};

export default ProjectDetails;
