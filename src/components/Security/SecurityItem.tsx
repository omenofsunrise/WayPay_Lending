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
  padding: 20px;
  align-items: center;
  gap: 20px;
  background: white;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

const Title = styled.h3`
  color: black;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-align: left;
  padding: 0;
`;

const Description = styled.p`
  color: rgba(80, 85, 92, 1);
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SecurityItem;