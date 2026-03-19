import React from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import { useMediaQuery } from 'react-responsive';
import DownloadBox from './DownloadBox';
import { breakpoints, media } from '../../styles/breakpoints';

const HeroContainer = styled.section`
  padding: 0 380px 50px 0;
  background: white;
  position: relative;
  overflow: hidden;
  
  ${media.down('sm')} {
    padding: 20px 0 40px;
  }
`;

const TitleContainer = styled.section`
  background: white;
  position: relative;
  overflow: hidden;
  padding-top: 40px;

  ${media.down('sm')} {
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
  
  ${media.down('sm')} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  max-height: 1000px;
  max-width: 500px;
  margin-bottom: auto;

  ${media.down('xm')} {
    flex: 0 0 55%;
  }
  
  ${media.down('sm')} {
    flex: 0 0 auto;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
    max-width: 100%;
    margin-left: -20%;
  }
`;

const MacbookImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  ${media.down('sm')} {
    max-width: 80%;
  }
`;

const ContentContainer = styled.div`
  text-align: left;
  z-index: 2;
  padding: 20px 0 20px 20px;
  flex: 1;
  
  ${media.down('xm')} {
    flex: 0 0 45%;
    margin-left: 20px;
  }
  
  ${media.down('sm')} {
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
  
  ${media.down('sm')} {
    font-size: 28px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${media.down('xm')} {
    grid-template-columns: 1fr;
  }
  
  ${media.down('sm')} {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const FeatureBox = styled.div`
  border: 1px solid #05909C;
  border-radius: 20px;
  padding: 20px;
  background: white;

  ${media.down('sm')} {
    border: none;
    background: white;
    box-shadow: 0 0 0 2px rgba(0, 125, 136, 0.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1.875rem, 1.25rem + 1.0417vw, 1.5rem);
  font-weight: 600;
  text-align: center;
  color: black;
  margin: 0;

  ${media.down('xm')} {
    font-size: 30px;
  }
  
  ${media.down('sm')} {
    font-size: 24px;
  }
`;

const FeatureDescription = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: black;
  line-height: 1.4;
  
  ${media.down('xm')} {
    font-size: 18px;
  }
  
  ${media.down('sm')} {
    font-size: 16px;
  }
`;

const DownloadSection = styled.div`
  margin-top: 30px;
  
  ${media.down('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const DownloadTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #05909C;
  margin-bottom: 15px;
  
  ${media.down('sm')} {
    text-align: center;
    width: 100%;
  }
`;

const DownloadGroup = styled.div<{ $isMobile?: boolean }>`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${({ $isMobile }) => $isMobile && `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const DownloadGroupTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #666;
  margin-bottom: 10px;
  padding-left: 5px;
  
  ${media.down('sm')} {
    text-align: center;
    padding-left: 0;
  }
`;

const DownloadButtons = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  ${({ $isMobile }) => $isMobile && `
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media (min-width: 411px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  `}
`;

const PWALink = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #05909C 0%, #03707A 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(5, 144, 156, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(5, 144, 156, 0.4);
  }
`;

const APKDownloadBox = styled(DownloadBox)`
  cursor: pointer;
`;

const Mobile: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: parseInt(breakpoints.sm) });

  const handleAPKDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/waypay-android.apk';
    link.download = 'waypay-android.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const DownloadButtonsComponent = ({ isMobileView = false }) => (
    <div style={{ display: "flex", justifyContent: isMobileView ? "center" : "flex-start", flexWrap: "wrap" }}>
      <DownloadGroup $isMobile={isMobileView}>
        <DownloadGroupTitle>Веб-версия</DownloadGroupTitle>
        <DownloadButtons $isMobile={isMobileView}>
          <DownloadBox
            title='Клиентам'
            iconSrc="/Logos/markets/AppStore.svg"
            platformName="Сайт"
            onClick={() => window.open('https://client.waypay.one', '_blank')}
          />
        </DownloadButtons>
      </DownloadGroup>

      <DownloadGroup $isMobile={isMobileView}>
        <DownloadGroupTitle>Мобильные приложения</DownloadGroupTitle>
        <DownloadButtons $isMobile={isMobileView}>
          <DownloadBox
            title='Сотрудникам'
            iconSrc="/Logos/markets/AppStore.svg"
            platformName="App Store"
            onClick={() => window.open('https://apps.apple.com/us/app/waypay/id6752306977', '_blank')}
          />

          <APKDownloadBox
            title='Сотрудникам'
            iconSrc="/Logos/markets/download.svg"
            platformName="APK для Android"
            onClick={handleAPKDownload}
          />

          <DownloadBox
            title='Сотрудникам'
            iconSrc="/Logos/markets/Rustore.svg"
            platformName="RuStore"
            onClick={() => window.open('https://www.rustore.ru/catalog/app/one.waypay.mobile', '_blank')}
          />

          <DownloadBox
            title='Клиентам'
            iconSrc="/Logos/markets/Rustore.svg"
            platformName="RuStore"
            onClick={() => window.open('https://www.rustore.ru/catalog/app/com.waypay.waypay_client', '_blank')}
          />
        </DownloadButtons>
      </DownloadGroup>
    </div>
  );

  if (isMobile) {
    return (
      <HeroContainer>
        <Title>Мобильный CRM для вашей эффективности</Title>
        <HeroContent>
          <MainText>Ваш офис в кармане. <br />Работайте с клиентами там, где вам удобно.</MainText>
          
          <ImageContainer>
            <MacbookImage 
              src="/Images/mobile.png" 
              alt="WayPay на телефоне" 
            />
          </ImageContainer>

          <ContentContainer>
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
            
            <DownloadSection>
              <DownloadTitle>Скачать приложение:</DownloadTitle>
              <DownloadButtonsComponent isMobileView={true} />
            </DownloadSection>
          </ContentContainer>
        </HeroContent>
      </HeroContainer>
    );
  }

  return (
    <>
      <TitleContainer>
        <Title>Мобильный CRM для вашей эффективности</Title>
      </TitleContainer>
      <HeroContainer>
        <HeroContent>
          <ImageContainer>
            <MacbookImage 
              src="/Images/mobile.png" 
              alt="WayPay на телефоне" 
            />
          </ImageContainer>

          <ContentContainer>           
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
            
            <MainText>Ваш офис в кармане. <br />Работайте с клиентами там, где вам удобно.</MainText>
            
            <DownloadSection>
              <DownloadTitle>Скачать приложение:</DownloadTitle>
              <DownloadButtonsComponent />
            </DownloadSection>
          </ContentContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Mobile;