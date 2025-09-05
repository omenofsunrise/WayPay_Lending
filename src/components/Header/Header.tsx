import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: none;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.img`
  height: 30px;
  width: auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.01414 16.8835C11.077 22.9029 16.0116 27.8162 22.031 30.9003L26.7103 26.221C27.2846 25.6467 28.1354 25.4552 28.8799 25.7105C31.2621 26.4975 33.8357 26.9229 36.4732 26.9229C37.643 26.9229 38.6002 27.88 38.6002 29.0498V36.473C38.6002 37.6429 37.643 38.6 36.4732 38.6C16.5008 38.6 0.314453 22.4137 0.314453 2.44127C0.314453 1.27143 1.2716 0.314285 2.44144 0.314285H9.88588C11.0557 0.314285 12.0129 1.27143 12.0129 2.44127C12.0129 5.1 12.4383 7.65238 13.2252 10.0346C13.4592 10.779 13.2891 11.6086 12.6935 12.2041L8.01414 16.8835Z" fill="url(#paint0_linear_79_235)"/>
    <defs>
      <linearGradient id="paint0_linear_79_235" x1="75.9287" y1="19.4571" x2="-32.2284" y2="19.4571" gradientUnits="userSpaceOnUse">
        <stop stopColor="#25CBA1"/>
        <stop offset="1" stopColor="#007D88"/>
      </linearGradient>
    </defs>
  </svg>
);

interface HeaderProps {
  onApplicationClick?: () => void;
  onPhoneClick?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  onApplicationClick,
  onPhoneClick,
  className
}) => {
  return (
    <HeaderContainer className={className}>
      <LogoContainer>
        <Logo src="/Logo.svg" alt="Logo" />
        <LogoText src="/LogoText.svg" alt="Company Name" />
      </LogoContainer>
      
      <ButtonsContainer>
        <Button onClick={onPhoneClick}>
          <PhoneIcon />
        </Button>
        <Button 
          onClick={onApplicationClick}
        >
          Оставить заявку
        </Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;