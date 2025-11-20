import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 125, 136, 0.1);
  width: 100%;
  margin-top: auto;
`;

const ContentWrapper = styled.div`
  padding: 40px 20px 20px;
  margin: 0 auto;
  max-width: 1200px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding-bottom: 30px;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 1100px) {
    gap: 40px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 0 0 auto;
  max-width: 250px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const LogoText = styled.img`
  height: 30px;
  width: auto;

  @media (max-width: 480px) {
    height: 24px;
  }
`;

const CompanyDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const InfoSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 0.2fr));
  gap: 40px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
    width: 100%;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2CA5AD;
  margin: 0 0 5px 0;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
  margin-bottom: 2px;
`;

const ContactValue = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;

  &:hover {
    color: rgba(0, 125, 136, 1);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TextValue = styled.span`
  font-size: 15px;
  color: #333;
  line-height: 1.4;
  font-weight: 500;
`;

const SmallText = styled.span`
  font-size: 14px;
  color: #555;
  line-height: 1.4;
  display: block;
  margin-top: 2px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 30px;
  padding-top: 20px;
  color: rgba(80, 85, 92, 1);
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    justify-content: center;
  }
`;

const Copyright = styled.span`
  font-size: 15px;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const PrivacyLink = styled.a`
  color: rgba(80, 85, 92, 1);
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: rgba(0, 125, 136, 1);
    opacity: 1;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    transform: scale(0.9);
  }
`;

const PhoneIcon = () => (
  <IconWrapper>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </IconWrapper>
);

const EmailIcon = () => (
  <IconWrapper>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
    </svg>
  </IconWrapper>
);

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <MainContent>
          <InfoSections>
            <InfoSection>
              <SectionTitle>Основные контакты</SectionTitle>
              <ContactItem>
                <ContactLabel>Электронная почта</ContactLabel>
                <ContactValue href="mailto:info@waypay.one">
                  <EmailIcon />
                  info@waypay.one
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Телефон</ContactLabel>
                <ContactValue href="tel:+79899242424">
                  <PhoneIcon />
                  +7 (989) 924-24-24
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Факс</ContactLabel>
                <ContactValue href="tel:+79899202020">
                  <PhoneIcon />
                  +7 (989) 920-20-20
                </ContactValue>
              </ContactItem>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Юридическая информация</SectionTitle>
              <ContactItem>
                <ContactLabel>Полное наименование</ContactLabel>
                <TextValue>ООО "Вайпай"</TextValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>ИНН</ContactLabel>
                <TextValue>2005015170</TextValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>ОГРН</ContactLabel>
                <TextValue>1252000002121</TextValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>КПП</ContactLabel>
                <TextValue>200501001</TextValue>
              </ContactItem>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Руководство и адреса</SectionTitle>
              <ContactItem>
                <ContactLabel>Генеральный директор</ContactLabel>
                <TextValue>Элипханов Ибрахим Султанович</TextValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Юридический адрес</ContactLabel>
                <SmallText>
                  366212, Чеченская Республика, Гудермесский р-н, г. Ойсхара, 
                  ул Чомака Ойшиева, двлд. 49 стр. 1
                </SmallText>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Фактический адрес</ContactLabel>
                <SmallText>
                  366212, Чеченская Республика, Гудермесский р-н, г. Ойсхара, 
                  ул Чомака Ойшиева, двлд. 49 стр. 1
                </SmallText>
              </ContactItem>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Поддержка</SectionTitle>
              <ContactItem>
                <ContactValue href="mailto:support@example.com">
                  <EmailIcon />
                  Техническая поддержка
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactValue href="mailto:info@example.com">
                  <EmailIcon />
                  Общие вопросы
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactValue href="mailto:partnership@example.com">
                  <EmailIcon />
                  Партнерство
                </ContactValue>
              </ContactItem>
            </InfoSection>
          </InfoSections>
        </MainContent>
      </ContentWrapper>

      <Divider />

      <ContentWrapper>
        <BottomSection>
          <Copyright>Все права защищены. ©2025</Copyright>
          <PrivacyLink href="/privacy">
            Политика конфиденциальности
          </PrivacyLink>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;