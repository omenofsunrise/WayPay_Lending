import React from 'react';
import styled from 'styled-components';
import SecurityItem, { SecurityItemProps } from './SecurityItem';
import Title from '../ui/Title';

const Security: React.FC = () => {
  const securityItems: SecurityItemProps[] = [
    {
      icon: <ShieldIcon />,
      title: "Шифрование данных",
      description: "ISO 27001 стандарт"
    },
    {
      icon: <LockIcon />,
      title: "Облачное хранилище",
      description: "Резервные копии ежедневно"
    },
    {
      icon: <CertificateIcon />,
      title: "Автообновления",
      description: "Последние технологии"
    }
  ];

  return (
    <SecurityContainer>
        <Title>Современные стандарты технологий и безопасности</Title>
        <SecurityWrapper>
            {securityItems.map((item, index) => (
                <SecurityItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </SecurityWrapper>
    </SecurityContainer>
  );
};

const ShieldIcon = () => (
  <IconWrapper>
    <svg width="87" height="46" viewBox="0 0 87 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.0187 15.3333C42.8412 6.40167 34.2388 0 24.125 0C11.2987 0 0.875 10.3117 0.875 23C0.875 35.6883 11.2987 46 24.125 46C34.2388 46 42.8412 39.5983 46.0187 30.6667H62.875V46H78.375V30.6667H86.125V15.3333H46.0187ZM24.125 30.6667C19.8625 30.6667 16.375 27.2167 16.375 23C16.375 18.7833 19.8625 15.3333 24.125 15.3333C28.3875 15.3333 31.875 18.7833 31.875 23C31.875 27.2167 28.3875 30.6667 24.125 30.6667Z" fill="#007D88"/>
    </svg>
  </IconWrapper>
);

const LockIcon = () => (
  <IconWrapper>
    <svg width="92" height="62" viewBox="0 0 92 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M74.175 23.4868C71.5683 10.2618 59.9533 0.333496 46 0.333496C34.9217 0.333496 25.3 6.62016 20.5083 15.8202C8.97 17.0468 0 26.8218 0 38.6668C0 51.3552 10.3117 61.6668 23 61.6668H72.8333C83.4133 61.6668 92 53.0802 92 42.5002C92 32.3802 84.1417 24.1768 74.175 23.4868Z" fill="#007D88"/>
    </svg>
  </IconWrapper>
);

const CertificateIcon = () => (
  <IconWrapper>
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.34175 9.34183C14.9001 3.7835 22.5284 0.333496 31.0001 0.333496C47.9434 0.333496 61.6284 14.0568 61.6284 31.0002C61.6284 47.9435 47.9434 61.6668 31.0001 61.6668C16.7018 61.6668 4.78009 51.8918 1.36842 38.6668H9.34175C12.4851 47.5985 20.9951 54.0002 31.0001 54.0002C43.6884 54.0002 54.0001 43.6885 54.0001 31.0002C54.0001 18.3118 43.6884 8.00016 31.0001 8.00016C24.6368 8.00016 18.9634 10.6452 14.8234 14.8235L27.1668 27.1668H0.33342V0.333496L9.34175 9.34183Z" fill="#007D88"/>
    </svg>
  </IconWrapper>
);

const SecurityContainer = styled.section`
  margin-top: 80px;

  @media (max-width: 768px) {
    margin: 25px 20px;
  }
`;

const SecurityWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Security;