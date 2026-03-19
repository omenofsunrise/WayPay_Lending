import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

const DownloadBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background: rgba(0, 125, 136, 1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
  margin: 8px 0;
  box-sizing: border-box;

  &:hover {
    background: rgba(0, 105, 116, 1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  ${media.down('sm')} {
    max-width: 100%;
    padding: 14px 16px;
    margin: 6px 8px;
    width: 200px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    margin: 4px 8px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  ${media.down('sm')} {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  flex: 1;
`;

const DownloadText = styled.span`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 2px;

  ${media.down('sm')} {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const PlatformText = styled.span`
  font-size: 18px;
  font-weight: 600;

  ${media.down('sm')} {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

interface DownloadBoxProps {
  iconSrc: string;
  platformName: string;
  onClick?: () => void;
  className?: string;
  title?: string;
}

const DownloadBox: React.FC<DownloadBoxProps> = ({ 
  iconSrc, 
  platformName, 
  onClick,
  className,
  title = 'Скачать в'
}) => {
  return (
    <DownloadBoxContainer onClick={onClick} className={className}>
      <IconWrapper>
        <Icon src={iconSrc} alt={`${title} ${platformName}`} />
      </IconWrapper>
      <TextContainer>
        <DownloadText>{title}</DownloadText>
        <PlatformText>{platformName}</PlatformText>
      </TextContainer>
    </DownloadBoxContainer>
  );
};

export default DownloadBox;