import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  padding: 10px 0 30px 0;
  background: #2CA5AD;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  
  @media (max-width: 1024px) {
    flex: 0 0 55%;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
  }
`;

const MacbookImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const TextContainer = styled.div`
  flex: 0 0 50%;
  position: relative;
  z-index: 2;
  margin-left: -7%;
  margin-top: -10%;
  
  @media (max-width: 1024px) {
    flex: 0 0 45%;
    margin-left: -8%;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-left: 0;
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  line-height: 1.2;
  
  @media (max-width: 1440px) {
    font-size: 54px;
  }
  
  @media (max-width: 1200px) {
    font-size: 44px;
  }
  
  @media (max-width: 1024px) {
    font-size: 38px;
  }
  
  @media (max-width: 900px) {
    font-size: 32px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  color: white;
  text-align: left;
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 30px;
  
  @media (max-width: 1440px) {
    font-size: 28px;
  }
  
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  
  @media (max-width: 900px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Hero: React.FC = () => {
  return (
      <HeroContainer>
          <HeroContent>
            <ImageContainer>
              <MacbookImage 
                src="/macbook-pro.png" 
                alt="WayPay на Macbook Pro" 
              />
            </ImageContainer>

            <TextContainer>
              <Title>Удобное хранение и управление договорами</Title>
              
              <Description>
                Современное решение для автоматизации учёта<br />
                рассрочек, клиентов и финансов вашего бизнеса.<br />
                <br />
                Переходите на цифровой формат работы уже сегодня!
              </Description>
            </TextContainer>
          </HeroContent>
      </HeroContainer>
  );
};

export default Hero;