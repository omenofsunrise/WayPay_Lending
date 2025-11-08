import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  padding: 10px 0 30px 0;
  background: #2CA5AD;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 0 0;
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
  flex: 0 0 40%;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  order: 1;
  max-height: 600px;
  @media (max-width: 1024px) {
    flex: 0 0 55%;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
    order: 2; 
  }
`;

const MacbookDesktop = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MacbookMobile = styled.img`
  display: none;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    display: block;
    max-width: 80%;
  }
`;

const TextContainer = styled.div`
  flex: 0 0 70%;
  position: relative;
  z-index: 2;
  margin-left: -3%;
  margin-top: -5%;
  order: 2;
  
  @media (max-width: 1024px) {
    flex: 0 0 50%;
    margin-left: -8%;
  }
  
  @media (max-width: 768px) {
    flex: 1;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    text-align: center;
    order: 1;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    margin-top: 0;
  }
  
  @media (max-width: 360px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  font-style: bold;
  padding-right: 200px;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  line-height: 1.2;
  
  @media (max-width: 1440px) {
    font-size: 35px;
  }
  
  @media (max-width: 1200px) {
    font-size: 30px;
    padding-right: 90px;
  }
  
  @media (max-width: 1024px) {
    font-size: 25px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 900px) {
    font-size: 22px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 20px;
    line-height: 1.3;
    padding: 0 10px;
  }
  
  @media (max-width: 640px) {
    font-size: 2rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
    margin-top: 15px;
    line-height: 1.25;
  }
  
  @media (max-width: 375px) {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
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
    
  @media (max-width: 1440px) {
    font-size: 28px;
  }
  
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 900px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 20px;
    padding: 0 10px;
  }
  
  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  @media (max-width: 375px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 10px;
    line-height: 1.35;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 18px 28px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 10px;
  border: solid 1px white;
  padding: 18px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 14px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 18px;
    border-radius: 10px;
  }
`;

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 28px;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
  
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonTextTop = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
  line-height: 1.2;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ButtonTextBottom = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Hero: React.FC = () => {
  return (
      <HeroContainer>
          <HeroContent>
            <ImageContainer>
              <MacbookDesktop src="/Images/macbook-pro.png" alt="WayPay на Macbook Pro" />
              <MacbookMobile src="/Images/cut-macbook-pro.png" alt="WayPay на мобильном" />
            </ImageContainer>
            <TextContainer>
              <Title>Удобное хранение и управление договорами</Title>
              
              <Description>
                Современное решение для автоматизации учёта<br />
                рассрочек, клиентов и финансов вашего бизнеса.<br />
                <br />
                Переходите на цифровой формат работы уже сегодня!
              </Description>

              <ButtonContainer>
                <StyledButton onClick={() => window.open('https://web.waypay.one', '_blank')}>
                  <ButtonIcon>
                    <img src="/Logos/Logo.svg" alt="icon" />
                  </ButtonIcon>
                  <ButtonTextContainer>
                    <ButtonTextTop>Перейти в</ButtonTextTop>
                    <ButtonTextBottom>WayPay CRM</ButtonTextBottom>
                  </ButtonTextContainer>
                </StyledButton>
              </ButtonContainer>
            </TextContainer>
        
          </HeroContent>
      </HeroContainer>
  );
};

export default Hero;