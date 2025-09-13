import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/buttons/Button';
import RequestModal from '../ui/Request';
import { useScroll } from '../../contexts/ScrollContext';

const HeaderContainer = styled.header`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2CA5AD;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 50px;

  @media (max-width: 768px) {
    height: 0px;
    padding: 0 20px;
    background-color: transparent;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  background: none;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  gap: 12px;
  margin-left: 120px;
  
  @media (max-width: 1024px) {
    margin-left: 60px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 32px;
  }
`;

const LogoText = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 24px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  @media (max-width: 1024px) {
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(45, 52, 54, 0.05);
  }
  
  &:active {
    background-color: rgba(45, 52, 54, 0.1);
  }

  @media (max-width: 1350px) {
    font-size: 15px;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 120px; /* Отступ справа для кнопки */
  
  @media (max-width: 1024px) {
    margin-right: 60px;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: auto; /* Кнопка справа на мобильных */
  }
`;

const ApplyButton = styled(Button)`
  background: none;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  box-shadow: none;
  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }  
`;

const PhoneButton = styled(Button)`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-top: 55px;
    margin-right: 0;
  }
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
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();
  
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (onApplicationClick) {
      onApplicationClick();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = (data: { fullName: string; email: string; phone: string }) => {
    console.log('Данные формы:', data);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer className={className}>        
        {!isMobile && (
          <LogoContainer>
            <Logo src="/Logos/Logo.svg" alt="Logo" />
            <LogoText src="/Logos/LogoText.svg" alt="WayPay" />
          </LogoContainer>
        )}
        
        <NavContainer>
          <NavButton onClick={() => handleNavClick('home')}>Главная</NavButton>
          <NavButton onClick={() => handleNavClick('features')}>Возможности</NavButton>
          <NavButton onClick={() => handleNavClick('tarif')}>Цены</NavButton>
          <NavButton onClick={() => handleNavClick('application')}>Приложение</NavButton>
          <NavButton onClick={() => handleNavClick('contacts')}>Контакты</NavButton>
        </NavContainer>
        
        <ButtonsContainer>
          {isMobile ? (
            <PhoneButton onClick={onPhoneClick || handleOpenModal}>
              <PhoneIcon />
            </PhoneButton>
          ) : (
            <>
              <PhoneButton onClick={onPhoneClick || handleOpenModal}>
                <PhoneIcon />
              </PhoneButton>
              <ApplyButton onClick={handleOpenModal}>
                Оставить заявку
              </ApplyButton>
            </>
          )}
        </ButtonsContainer>
      </HeaderContainer>

      <RequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitForm}
        title="Оставить заявку"
      />
    </>
  );
};

export default Header;