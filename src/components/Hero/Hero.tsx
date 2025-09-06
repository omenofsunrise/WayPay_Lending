import React from 'react';
import styled from 'styled-components';
import GradientButton from '../ui/buttons/GradientButton';

const getDaysUntilNewYear = (): number => {
  const now = new Date();
  const targetDate = new Date(2026, 0, 1);
  const timeDiff = targetDate.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff > 0 ? daysDiff : 0;
};

const HeroContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: black;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1200px;
`;

const Description = styled.p`
  color: rgba(80, 85, 92, 1);
    font-size: 30px;

  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PromotionText = styled.div`
  margin: 40px;
  color: rgba(0, 125, 136, 1);
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const DaysHighlight = styled.span`
  font-weight: 700;
`;

const Hero: React.FC = () => {
  const daysLeft = getDaysUntilNewYear();

  return (
    <HeroContainer>
      <Title>Удобное хранение договоров</Title>
      
      <ContentContainer>
        <Description>
          WayPay - современное решение для автоматизации учёта рассрочек, 
          клиентов и финансов вашего бизнеса. Переходите на цифровой формат 
          работы уже сегодня!
        </Description>
        
        <PromotionText>
          Осталось <DaysHighlight>{daysLeft} дней</DaysHighlight> до конца акции
        </PromotionText>
        
        <GradientButton>Узнать больше</GradientButton>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;