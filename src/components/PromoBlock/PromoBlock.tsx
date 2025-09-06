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
  margin-bottom: clamp(16px, 3vw, 24px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin-bottom: clamp(16px, 3vw, 24px);
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 16px;
  }
`;

const DaysCounter = styled.div`
  padding: 12px 20px;
  margin: clamp(16px, 3vw, 24px) auto;
  display: inline-block;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1.1rem);

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.85rem;
    border-radius: 12px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: clamp(16px, 3vw, 24px);
`;

interface PromoBlockProps {
  onButtonClick?: () => void;
  daysLeft?: number;
}

const PromoBlock: React.FC<PromoBlockProps> = ({
  onButtonClick,
  daysLeft = 118
}) => {
  return (
    <PromoContainer>
      <Title>Специальное предложение!</Title>
      <Description>
        Все новые клиенты до 1 января получат бесплатный доступ к WayPay на 2 месяца!
      </Description>
      <DaysCounter>
        Осталось {daysLeft} дней до конца акции
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