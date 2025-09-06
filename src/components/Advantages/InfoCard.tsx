import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: clamp(12px, 2vw, 20px);
  padding: clamp(20px, 3vw, 40px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: clamp(8px, 1.5vw, 12px);
  flex-wrap: wrap;
  gap: 12px;
`;

const Icon = styled.div`
  border-radius: clamp(4px, 1vw, 6px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: clamp(8px, 1.5vw, 12px);
  flex-shrink: 0;
  width: clamp(50px, 10vw, 70px);
  height: clamp(50px, 10vw, 70px);
  
  svg {
    fill: black;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: black;
  line-height: 1.3;
  margin: 0;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 480px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: clamp(1rem, 3vw, 2rem);
  color: #666;
  line-height: 1.5;
  text-align: left;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    text-align: justify;
  }
  
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const DefaultIcon = () => (
  <svg viewBox="0 0 124 124">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon = <DefaultIcon />,
  title,
  description,
  className
}) => {
  return (
    <Container className={className}>
      <Header>
        <Icon>
          {icon}
        </Icon>
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
    </Container>
  );
};

export default InfoCard;