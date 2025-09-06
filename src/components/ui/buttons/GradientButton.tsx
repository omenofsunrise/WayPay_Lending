import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $textColor?: string;
  $disabled?: boolean;
}>`
  background: ${props => props.$disabled 
    ? props.$backgroundColor || '#cccccc' 
    : 'linear-gradient(90deg, rgba(0, 125, 136, 1) 0%, rgba(37, 203, 161, 1) 100%)'};
  color: ${props => props.$textColor || '#ffffff'};
  border-radius: 20px;
  border: none;
  padding: clamp(10px, 2vw, 16px) clamp(16px, 3vw, 24px);
  font-size: clamp(1rem, 2.5vw, 1.5em);
  font-weight: 700;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 8px 0 rgba(80, 85, 92, 0.25);
  min-height: 44px;
  min-width: 340px;
  opacity: ${props => props.$disabled ? 0.6 : 1};
  position: relative;
  overflow: hidden;
  
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
    transition: width 0.3s ease, height 0.3s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 8px 16px 0 rgba(80, 85, 92, 0.3);
      background: ${props => props.$disabled 
        ? props.$backgroundColor || '#cccccc' 
        : 'linear-gradient(90deg, rgba(0, 125, 136, 0.9) 0%, rgba(37, 203, 161, 0.9) 100%)'};
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 3px 6px 0 rgba(80, 85, 92, 0.2);
      
      &::after {
        width: 300px;
        height: 300px;
      }
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${props => props.$textColor || '#ffffff'};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 12px 20px;
    font-size: 1.1em;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 10px 16px;
    font-size: 1em;
    min-height: 40px;
    gap: 6px;
    box-shadow: 0 3px 6px 0 rgba(80, 85, 92, 0.2);
  }

  @media (max-height: 480px) and (orientation: landscape) {
    min-height: 36px;
    padding: 8px 14px;
    font-size: 0.9em;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &::after {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.4);
    
    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
      }
      
      &:active:not(:disabled) {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
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
  type = 'button'
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
      onClick={handleClick}
      className={className}
      disabled={disabled}
      type={type}
      aria-disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default GradientButton;