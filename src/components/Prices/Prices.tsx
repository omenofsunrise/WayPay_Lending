import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import Layout from '../ui/Layout';
import Button from '../ui/buttons/Button';
import RequestModal from '../ui/Request';
import { media } from '../../styles/breakpoints';

// Константы для цен и акции
const PRICES = {
  MONTHLY: '5 000 ₽',
  YEARLY: '60 000 ₽',
  PROMO: 'Бесплатно'
} as const;

const PROMO_DESCRIPTION = 'Компаниям, которые впервые подключают нашу информационную систему — 2 месяца бесплатно';

// Стилизованные компоненты
const PricingContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0 0;
  flex-wrap: wrap;

  ${media.down('sm')} {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingBox = styled.article<{ $isPromo?: boolean }>`
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
  transition: all 0.3s ease;
  
  ${media.down('sm')} {
    width: 70%;
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: white;
  color: #2BA5AD;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const PriceContainer = styled.div`
  margin: auto 0;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
`;

const Period = styled.div`
  font-size: 14px;
  opacity: 0.8;
  text-align: center;
`;

const PromoDescription = styled.p`
  font-size: 20px;
  margin: 40px 0 60px;
  text-align: center;
  font-weight: 500;
  line-height: 1.4;

  ${media.down('sm')} {
    font-size: 17px;
    margin: 30px 0 40px;
  }
`;

const ApplyButton = styled(Button)`
  background: transparent;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 24px;
  margin: 0 20px 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white !important;
    color: #2BA5AD !important;
    transform: translateY(-2px);
  }  
`;

// Типы
interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

const Prices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSubmit = useCallback((data: FormData) => {
    console.log('Заявка на акцию:', data);
    handleCloseModal();
  }, [handleCloseModal]);

  return (
    <Layout>
      <Title>Тарифы</Title>
      
      <PricingContainer>
        <PricingBox aria-label="Ежемесячный тариф">
          <PriceContainer>
            <Price>{PRICES.MONTHLY}</Price>
            <Period>в месяц</Period>
          </PriceContainer>
        </PricingBox>

        <PricingBox 
          $isPromo 
          aria-label="Акционный тариф"
          role="complementary"
        >
          <PromoBadge aria-label="Акция">Акция</PromoBadge>
          <Price>{PRICES.PROMO}</Price>
          <PromoDescription>
            {PROMO_DESCRIPTION}
          </PromoDescription>
          <ApplyButton 
            onClick={handleApply}
            aria-label="Оставить заявку на акционный тариф"
          >
            Оставить заявку
          </ApplyButton>
        </PricingBox>

        <PricingBox aria-label="Годовой тариф">
          <PriceContainer>
            <Price>{PRICES.YEARLY}</Price>
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