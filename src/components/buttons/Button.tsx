import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $textColor?: string;
}>`
  background-color: ${props => props.$backgroundColor || '#ffffff'};
  color: ${props => props.$textColor || 'rgba(0, 125, 136, 1)'};
  border-radius: 20px;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  children,
  onClick,
  className
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;