import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
  
  svg {
    fill: white;
  }
`;

const Title = styled.h3`
  margin-left: 25px;
  font-size: 2.5em;
  font-weight: 600;
  color: black;
  align-items: center;
  line-height: 1.3;
`;

const Description = styled.p`
  margin: 0;
  font-size: 2em;
  color: #666;
  line-height: 1.5;
  text-align: left;
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