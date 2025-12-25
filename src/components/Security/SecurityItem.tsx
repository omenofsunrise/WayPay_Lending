import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

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
  box-sizing: border-box;

  ${media.down('sm')} {
    flex-direction: row;
    padding: 16px;
    gap: 16px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: clamp(40px, 10vw, 60px);
  height: clamp(40px, 10vw, 60px);

  svg {
    fill: black;
    width: 100%;
    height: 100%;
  }

  ${media.down('sm')} {
    width: 40px;
    height: 40px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1vw, 8px);
  text-align: left;
  flex: 1;

  ${media.down('sm')} {
    gap: 6px;
  }
`;

const Title = styled.h3`
  color: black;
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  word-wrap: break-word;

  ${media.down('sm')} {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  color: rgba(80, 85, 92, 1);
  font-size: clamp(14px, 3vw, 16px);
  line-height: 1.4;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  
  white-space: normal;
  overflow: visible;
  text-overflow: clip;

  ${media.down('sm')} {
    font-size: 14px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export default SecurityItem;