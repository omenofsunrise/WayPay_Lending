import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(0, 125, 136, 0.1);
  width: 99vw;
`;

const ContentWrapper = styled.div`
  padding: 40px 20px 20px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding-bottom: 30px;

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
  margin-left: 100px;
`;

const Logo = styled.img`
  height: 50px;
`;

const LogoText = styled.img`
  height: 30px;
`;

const ContactSection = styled.div`
  display: flex;
  gap: 50px;
  text-align: right;
  margin-right: 100px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactItem = styled.a`
  text-decoration: none;
  font-size: 35px;
  font-weight: 500;
  transition: color 0.3s ease;
  color: black;

  &:hover {
    color: rgba(0, 125, 136, 1);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: white;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 20px auto 50px;
  padding-top: 20px;
  color: rgba(80, 85, 92, 1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Copyright = styled.span`
  font-size: 35px;
  margin-left: 100px;
`;

const PrivacyLink = styled.a`
  color: rgba(80, 85, 92, 1);
  text-decoration: none;
  font-size: 35px;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(0, 125, 136, 1);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <MainContent>
          <LogoSection>
            <Logo 
              src="/Logo.svg" 
              alt="Логотип" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <LogoText 
              src="/LogoText.svg" 
              alt="Текст логотипа" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </LogoSection>

          <ContactSection>
            <ContactItem href="tel:+78001234567">
              +7 (800) 123-45-67
            </ContactItem>
            <ContactItem href="mailto:info@example.com">
              info@example.com
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