import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import RequestContainer from './RequestContainer';
import Layout from '../ui/Layout';

const RequestForm: React.FC = () => {
  return (
    <SecurityContainer>
      <Title color='white'>Готовы оптимизировать свой бизнес?</Title>
      <Layout backgroundColor='#2BA5AD' flexDirection='row' padding='0 200px'>
        <ContentWrapper>
          <LeftSection>
            <ImageContainer>
              <Image 
                src="/Images/LaptopWithMobile.png" 
                alt="WayPay на телефоне" 
              />
            </ImageContainer>
          </LeftSection>
          
          <RightSection>
            <RequestContainer />
          </RightSection>
        </ContentWrapper>
      </Layout>
    </SecurityContainer>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    order: 2;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 400px;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const SecurityContainer = styled.section`
  padding: 60px 0;
  background: #2BA5AD;

  @media (max-width: 768px) {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
    padding: 40px 0 0;
    margin: 0;
  }
`;

export default RequestForm;