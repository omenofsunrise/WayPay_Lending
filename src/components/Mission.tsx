import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const MissionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const MissionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #2CA5AD;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const MissionText = styled.p`
  color: #333333;
  font-size: 24px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
  
  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 1.4;
  }
  
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  color: #2CA5AD;
  font-weight: 600;
`;

const Mission: React.FC = () => {
  return (
    <MissionContainer id="mission">
      <MissionContent>
        <MissionTitle>Наша миссия</MissionTitle>
        <MissionText>
          Наша миссия — помощь в автоматизации ведения учёта рассрочек 
          как для <Highlight>различных компаний</Highlight> так и для 
          <Highlight> индивидуальных предпринимателей</Highlight>
        </MissionText>
      </MissionContent>
    </MissionContainer>
  );
};

export default Mission;