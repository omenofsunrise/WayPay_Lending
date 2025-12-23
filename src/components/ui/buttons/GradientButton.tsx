import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fullWidth?: boolean;
}

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $textColor?: string;
  $disabled?: boolean;
  $size?: 'small' | 'medium' | 'large' | 'xlarge';
  $fullWidth?: boolean;
}>`
  background: ${props => props.$disabled 
    ? props.$backgroundColor || '#cccccc' 
    : props.$backgroundColor || 'linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%)'};
  color: ${props => props.$textColor || '#ffffff'};
  border-radius: 28px;
  border: none;
  font-weight: 700;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.4;
  letter-spacing: 0.02em;
  font-family: inherit;
  
  padding: 24px 48px;
  font-size: 1.5rem;
  min-height: 80px;
  min-width: 200px;
  
  ${props => props.$size === 'small' && css`
    padding: 12px 24px;
    font-size: 1rem;
    min-height: 50px;
    min-width: 120px;
    border-radius: 20px;
    gap: 8px;
  `}
  
  ${props => props.$size === 'medium' && css`
    padding: 20px 40px;
    font-size: 1.3rem;
    min-height: 70px;
    min-width: 180px;
    border-radius: 24px;
    gap: 10px;
  `}
  
  ${props => props.$size === 'large' && css`
    padding: 28px 56px;
    font-size: 1.7rem;
    min-height: 90px;
    min-width: 240px;
    border-radius: 32px;
    gap: 14px;
  `}
  
  ${props => props.$size === 'xlarge' && css`
    padding: 32px 64px;
    font-size: 2rem;
    min-height: 100px;
    min-width: 280px;
    border-radius: 36px;
    gap: 16px;
  `}
  
  ${props => props.$fullWidth && css`
    width: 100%;
    max-width: 100%;
  `}
  
  opacity: ${props => props.$disabled ? 0.6 : 1};
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
      background: ${props => props.$disabled 
        ? props.$backgroundColor || '#cccccc' 
        : props.$backgroundColor 
          ? `${props.$backgroundColor}DD`
          : 'linear-gradient(90deg, rgba(0, 125, 136, 0.9) 0%, rgba(37, 203, 161, 0.9) 100%)'};
    }
    
    &:active:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
      
      &::after {
        width: 500px;
        height: 500px;
      }
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 4px solid ${props => props.$textColor || '#ffffff'}40;
    outline-offset: 3px;
  }

  @media (max-width: 1440px) {
    padding: 20px 40px;
    font-size: 1.3rem;
    min-height: 70px;
    min-width: 180px;
    
    ${props => props.$size === 'small' && css`
      padding: 10px 20px;
      font-size: 0.9rem;
      min-height: 45px;
      min-width: 100px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 18px 36px;
      font-size: 1.2rem;
      min-height: 65px;
      min-width: 160px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 24px 48px;
      font-size: 1.5rem;
      min-height: 80px;
      min-width: 220px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 28px 56px;
      font-size: 1.7rem;
      min-height: 90px;
      min-width: 250px;
    `}
  }

  @media (max-width: 1024px) {
    padding: 18px 36px;
    font-size: 1.2rem;
    min-height: 65px;
    min-width: 160px;
    border-radius: 26px;
    
    ${props => props.$size === 'small' && css`
      padding: 9px 18px;
      font-size: 0.85rem;
      min-height: 40px;
      min-width: 90px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 16px 32px;
      font-size: 1.1rem;
      min-height: 60px;
      min-width: 140px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 20px 40px;
      font-size: 1.3rem;
      min-height: 70px;
      min-width: 180px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 24px 48px;
      font-size: 1.5rem;
      min-height: 80px;
      min-width: 200px;
    `}
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1.1rem;
    min-height: 60px;
    min-width: 140px;
    border-radius: 24px;
    gap: 10px;
    
    ${props => props.$size === 'small' && css`
      padding: 8px 16px;
      font-size: 0.8rem;
      min-height: 35px;
      min-width: 80px;
      gap: 6px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 14px 28px;
      font-size: 1rem;
      min-height: 55px;
      min-width: 120px;
      gap: 8px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 18px 36px;
      font-size: 1.2rem;
      min-height: 65px;
      min-width: 160px;
      gap: 10px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 20px 40px;
      font-size: 1.3rem;
      min-height: 70px;
      min-width: 180px;
      gap: 12px;
    `}
  }

  @media (max-width: 480px) {
    padding: 14px 28px;
    font-size: 1rem;
    min-height: 55px;
    min-width: 120px;
    border-radius: 22px;
    gap: 8px;
    
    ${props => props.$size === 'small' && css`
      padding: 7px 14px;
      font-size: 0.75rem;
      min-height: 30px;
      min-width: 70px;
      gap: 5px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 12px 24px;
      font-size: 0.9rem;
      min-height: 50px;
      min-width: 100px;
      gap: 7px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 16px 32px;
      font-size: 1.1rem;
      min-height: 60px;
      min-width: 140px;
      gap: 9px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 18px 36px;
      font-size: 1.2rem;
      min-height: 65px;
      min-width: 160px;
      gap: 10px;
    `}
  }

  @media (max-width: 360px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    min-height: 50px;
    min-width: 100px;
    border-radius: 20px;
    
    ${props => props.$size === 'small' && css`
      padding: 6px 12px;
      font-size: 0.7rem;
      min-height: 28px;
      min-width: 60px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 10px 20px;
      font-size: 0.85rem;
      min-height: 45px;
      min-width: 90px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 14px 28px;
      font-size: 1rem;
      min-height: 55px;
      min-width: 120px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 16px 32px;
      font-size: 1.1rem;
      min-height: 60px;
      min-width: 140px;
    `}
  }

  @media (max-height: 480px) and (orientation: landscape) {
    padding: 10px 20px;
    font-size: 0.85rem;
    min-height: 45px;
    min-width: 90px;
    
    ${props => props.$size === 'small' && css`
      padding: 5px 10px;
      font-size: 0.65rem;
      min-height: 25px;
      min-width: 50px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 8px 16px;
      font-size: 0.8rem;
      min-height: 40px;
      min-width: 80px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 12px 24px;
      font-size: 0.9rem;
      min-height: 50px;
      min-width: 100px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 14px 28px;
      font-size: 1rem;
      min-height: 55px;
      min-width: 120px;
    `}
  }

  @media (min-width: 2560px) {
    padding: 32px 64px;
    font-size: 2rem;
    min-height: 100px;
    min-width: 280px;
    
    ${props => props.$size === 'small' && css`
      padding: 16px 32px;
      font-size: 1.2rem;
      min-height: 60px;
      min-width: 140px;
    `}
    
    ${props => props.$size === 'medium' && css`
      padding: 24px 48px;
      font-size: 1.5rem;
      min-height: 80px;
      min-width: 200px;
    `}
    
    ${props => props.$size === 'large' && css`
      padding: 36px 72px;
      font-size: 2.2rem;
      min-height: 110px;
      min-width: 300px;
    `}
    
    ${props => props.$size === 'xlarge' && css`
      padding: 40px 80px;
      font-size: 2.5rem;
      min-height: 120px;
      min-width: 320px;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &::after {
      display: none;
    }
    
    &:hover:not(:disabled) {
      transform: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    
    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
      }
      
      &:active:not(:disabled) {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
      }
    }
  }
`;

const GradientButton: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor = '#ffffff',
  children,
  onClick,
  className,
  disabled = false,
  type = 'button',
  size = 'medium',
  fullWidth = false
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
      $size={size}
      $fullWidth={fullWidth}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      type={type}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </StyledButton>
  );
};

export default GradientButton;