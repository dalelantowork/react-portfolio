import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const SkillsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const SkillCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 20px;
  text-align: center;
`;

const SkillItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: var(--primary-color);
    background: var(--glass-button-bg);
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;


const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills" className="py-5">
      <Wrapper>
        <div className="text-center mb-4">
          <h6 className="text-accent mb-2">My Capabilities</h6>
          <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-main)' }}>Skills</h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
            With more than 8 years of hands-on experience in web development, I bring proven expertise to drive your projects to success.
          </p>
        </div>
        <SkillsListContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillItems>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillCard>
          ))}
        </SkillsListContainer>
      </Wrapper>
    </SkillsContainer>
  );
}

export default Skills;
