import React from 'react';
import styled from 'styled-components';

export interface SecurityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  return (
    <Container className={className}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: clamp(12px, 3vw, 20px);
  align-items: center;
  gap: clamp(12px, 3vw, 20px);
  background: white;
  border-radius: clamp(12px, 3vw, 20px);
  width: 100%;
  min-height: 100px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: clamp(40px, 10vw, 60px);
  height: clamp(40px, 10vw, 60px);

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1vw, 8px);
  text-align: left;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const Title = styled.h3`
  color: black;
  font-size: clamp(18px, 4vw, 30px);
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: rgba(80, 85, 92, 1);
  font-size: clamp(14px, 3vw, 20px);
  line-height: 1.4;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  
  /* Убираем nowrap для мобильных */
  @media (max-width: 768px) {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }

  /* Для десктопа сохраняем ellipsis */
  @media (min-width: 769px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

export default SecurityItem;