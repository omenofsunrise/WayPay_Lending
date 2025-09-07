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

  @media (max-width: 992px) {
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: flex-start;
    margin-left: 0;
  }
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

const ContactSection = styled.div`
  display: flex;
  gap: 30px;
  text-align: right;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    justify-content: flex-end;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    text-align: center;
    gap: 20px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const ContactItem = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    color: rgba(0, 125, 136, 1);
    transform: translateY(-2px);
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
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
  font-size: 16px;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const PrivacyLink = styled.a`
  color: rgba(80, 85, 92, 1);
  text-decoration: none;
  font-size: 16px;
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

  @media (max-width: 480px) {
    transform: scale(0.8);
  }
`;

// Исправленная иконка телефона
const PhoneIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </IconWrapper>
);

const EmailIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
    </svg>
  </IconWrapper>
);

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <MainContent>
          <LogoSection>
            <Logo 
              src="/Logos/BlackLogo.svg" 
              alt="Логотип" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <LogoText 
              src="/Logos/BlackLogoText.svg" 
              alt="Текст логотипа" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </LogoSection>

          <ContactSection>
            <ContactItem href="tel:+79899242424">
              <PhoneIcon />
              +7 989 924 24 24
            </ContactItem>
            <ContactItem href="mailto:ya@eliphanov.ru">
              <EmailIcon />
              ya@eliphanov.ru
            </ContactItem>
          </ContactSection>
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