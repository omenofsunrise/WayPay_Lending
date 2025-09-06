import React, { useState } from 'react';
import styled from 'styled-components';
import GradientButton from '../ui/buttons/GradientButton';
import RequestModal from '../ui/Request';

const getDaysUntilNewYear = (): number => {
  const now = new Date();
  const targetDate = new Date(2026, 0, 1);
  const timeDiff = targetDate.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff > 0 ? daysDiff : 0;
};

const HeroContainer = styled.section`
  padding: 40px 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: black;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 15px;
  }
`;

const ContentContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
`;

const Description = styled.p`
  color: rgba(80, 85, 92, 1);
  font-size: 30px;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const PromotionText = styled.div`
  margin: 40px;
  color: rgba(0, 125, 136, 1);
  font-size: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const DaysHighlight = styled.span`
  font-weight: 700;
`;

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const daysLeft = getDaysUntilNewYear();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = (data: { fullName: string; email: string; phone: string }) => {
    console.log('Данные формы из героя:', data);
  };

  return (
    <>
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
          
          <GradientButton onClick={handleOpenModal}>
            Узнать больше
          </GradientButton>
        </ContentContainer>
      </HeroContainer>

      <RequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitForm}
        title="Узнать больше о WayPay"
      />
    </>
  );
};

export default Hero;