import React from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';

const HeroContainer = styled.section`
  padding: 50px 20px 50px 0;
  background: white;
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
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  max-height: 800px;
  max-width: 500px;

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

const ContentContainer = styled.div`
  text-align: left;
  z-index: 2;
  padding: 20px;
  flex: 1;
  
  @media (max-width: 1024px) {
    flex: 0 0 45%;
    margin-left: 20px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin-left: 0;
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
`;

const MainText = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: black;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  border: 1px solid #05909C;
  border-radius: 20px;
  padding: 10px 20px;
  background: white;
`;

const FeatureTitle = styled.h3`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #black;
  margin: 0 0 15px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FeatureDescription = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: #black;
  line-height: 1.4;
  
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Mobile: React.FC = () => {
  return (
      <HeroContainer>
          <Title>Мобильный CRM для вашей эффективности</Title>
          <HeroContent>
            <ImageContainer>
              <MacbookImage 
                src="/mobile.png" 
                alt="WayPay на телефоне" 
              />
            </ImageContainer>

            <ContentContainer>
              <MainText>Ваш офис в кармане. <br />Работайте с клиентами там, где вам удобно.</MainText>
              
              <FeaturesGrid>
                <FeatureBox>
                  <FeatureTitle>Мгновенная синхронизация между всеми устройствами</FeatureTitle>
                  <FeatureDescription>Никакой потери данных и всегда актуальная информация под рукой, где бы вы ни были.</FeatureDescription>
                </FeatureBox>
                
                <FeatureBox>
                  <FeatureTitle>Мгновенные push-уведомления</FeatureTitle>
                  <FeatureDescription>Моментальные оповещения о новых лидах, смене статуса сделки, просроченных задачах или комментариях коллег.</FeatureDescription>
                </FeatureBox>
                
                <FeatureBox>
                  <FeatureTitle>Мобильная отчетность и дашборды</FeatureTitle>
                  <FeatureDescription>Смотрите ключевые показатели по рассрочкам, выполняйте план и отслеживайте динамику в простых и наглядных графиках прямо с телефона.</FeatureDescription>
                </FeatureBox>
                
                <FeatureBox>
                  <FeatureTitle>Легкое делегирование задач коллегам</FeatureTitle>
                  <FeatureDescription>Появилась срочная задача? За 30 секунд создайте ее и назначьте нужному менеджеру, указав дедлайн и приоритет.</FeatureDescription>
                </FeatureBox>
              </FeaturesGrid>
            </ContentContainer>
          </HeroContent>
      </HeroContainer>
  );
};

export default Mobile;