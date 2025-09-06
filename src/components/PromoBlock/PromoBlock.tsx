import React from 'react';
import styled from 'styled-components';
import Button from '../ui/buttons/Button';

const PromoContainer = styled.div`
  background: linear-gradient(160deg, rgba(0, 125, 136, 1), rgba(37, 203, 161, 1));
  box-shadow: 0 5px 8px 0 rgba(0, 125, 136, 0.3);
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 20px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 20px 16px;
  }

  @media (max-width: 480px) {
    border-radius: 12px;
    padding: 16px 12px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(25px, 5vw, 34px);

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 3.2vw, 1.76rem);
  margin-bottom: clamp(12px, 2.5vw, 20px);
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 1.04rem;
    margin-bottom: 16px;
  }
`;

const DaysCounter = styled.div`
  padding: 12px 20px;
  margin-bottom: clamp(12px, 2.5vw, 20px);
  display: inline-block;
  font-weight: 400;
  font-size: clamp(0.8rem, 3.2vw, 1.76rem);

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.85rem;
    border-radius: 12px;
  }
`;

const BoldDays = styled.span`
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin-top: clamp(16px, 3vw, 24px);
  margin-bottom: 35px;
`;

interface PromoBlockProps {
  onButtonClick?: () => void;
}

const getDaysUntilNewYear = (): number => {
  const now = new Date();
  const targetDate = new Date(2026, 0, 1);
  const timeDiff = targetDate.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff > 0 ? daysDiff : 0;
};

const PromoBlock: React.FC<PromoBlockProps> = ({
  onButtonClick,
}) => {
  const daysLeft = getDaysUntilNewYear();
  return (
    <PromoContainer>
      <Title>Специальное предложение!</Title>
      <Description>
        Все новые клиенты до 1 января получат бесплатный доступ к WayPay на 2 месяца!
      </Description>
      <DaysCounter>
        Осталось <BoldDays>{daysLeft} дней</BoldDays> до конца акции
      </DaysCounter>
      <ButtonContainer>
        <Button
          onClick={onButtonClick}
        >
          Оставить заявку
        </Button>
      </ButtonContainer>
    </PromoContainer>
  );
};

export default PromoBlock;