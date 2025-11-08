import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 80px 0;
  background: #ffffff;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #2CA5AD;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
`;

const AboutText = styled.div`
  color: #333333;
  font-size: 18px;
  line-height: 1.7;
  text-align: justify;
  
  p {
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
    
    p {
      margin-bottom: 20px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.5;
    
    p {
      margin-bottom: 18px;
    }
  }
`;

const HighlightText = styled.span`
  color: #2CA5AD;
  font-weight: 600;
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>О нашей организации</AboutTitle>
        <AboutText>
          <p>
            Наша организация является технологическим стартапом внедряющим новейшие технологии в жизнь бизнеса.
          </p>
          
          <p>
            Мы специализируемся на создании мобильных приложений, сайтов и корпоративных решений объединяющих разные компании одной отрасли. Наша команда состоит из опытных разработчиков, дизайнеров и менеджеров, которые работают вместе, чтобы создавать продукты высочайшего качества.
          </p>
          
          <p>
            Выйдя в свет в <HighlightText>2025 году</HighlightText> мы уже предоставили рынку <HighlightText>CRM систему</HighlightText> в виде сайта <HighlightText>web.waypay.one</HighlightText> и два мобильных приложения для сотрудников и клиентов соответственно.
          </p>
          
          <p>
            Наша организация зарегистрирована в соответствии с законодательством Российской Федерации и ведет прозрачную финансовую деятельность. Мы строго соблюдаем все нормативные требования и стандарты качества в нашей отрасли.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;