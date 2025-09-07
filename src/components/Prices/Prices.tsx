import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import Layout from '../ui/Layout';
import Button from '../ui/buttons/Button';
import RequestModal from '../ui/Request';

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingBox = styled.div<{ $isPromo?: boolean }>`
  border: ${props => props.$isPromo ? 'none' : '1px solid #2BA5AD'};
  border-radius: 20px;
  padding: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${props => props.$isPromo ? '#2BA5AD' : 'transparent'};
  color: ${props => props.$isPromo ? 'white' : 'inherit'};
  box-shadow: ${props => props.$isPromo ? '0 8px 20px rgba(43, 165, 173, 0.3)' : 'none'};
  transform: ${props => props.$isPromo ? 'scale(1.05)' : 'none'};
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    transform: none;
    margin-bottom: 0;
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  color: #2BA5AD;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const PriceContainer = styled.div<{ $isPromo?: boolean }>`
    margin: auto 0;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Period = styled.div`
  font-size: 16px;
  opacity: 0.8;
`;

const DaysLeft = styled.div`
  font-size: 25px;
  margin: 80px 0;
  text-align: center;
`;

const PromoTitle = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`;

const PromoDescription = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 0;
  line-height: 1.5;
`;

const ApplyButton = styled(Button)`
  background: none;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  box-shadow: none;
  font-size: 20px;
  margin: 0 20px 15px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }  
`;

const Prices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateDaysLeft = () => {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const targetDate = new Date(nextYear, 0, 1);
    const timeDiff = targetDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const daysLeft = calculateDaysLeft();

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data: {
    fullName: string;
    email: string;
    phone: string;
  }) => {
    console.log('Данные формы:', data);
  };

  return (
    <Layout>
      <Title>Тарифы</Title>
      <PricingContainer>
        <PricingBox>
          <PriceContainer>
                <Price>5 000 ₽</Price>
                <Period>в месяц</Period>
          </PriceContainer>
        </PricingBox>

        <PricingBox $isPromo>
          <PromoBadge>Акция</PromoBadge>
          <PromoTitle>Бесплатно</PromoTitle>
          <PromoDescription>
            Все компании зарегистрировавшиеся до 1 января получат 2 месяца бесплатно
          </PromoDescription>
          <DaysLeft>Осталось {daysLeft} дней до конца акции</DaysLeft>
          <ApplyButton 
            onClick={handleApply}
            backgroundColor="white"
            textColor="#2BA5AD"
          >
            Оставить заявку
          </ApplyButton>
        </PricingBox>

        <PricingBox>
          <PriceContainer>
                <Price>60 000 ₽</Price>
                <Period>в год</Period>
          </PriceContainer>
        </PricingBox>
      </PricingContainer>

      <RequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title="Оставить заявку на акцию"
      />
    </Layout>
  );
};

export default Prices;