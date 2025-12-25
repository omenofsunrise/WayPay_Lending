import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import RequestContainer from './RequestContainer';
import Layout from '../ui/Layout';
import { media } from '../../styles/breakpoints';

const RequestForm: React.FC = () => {
  return (
    <SecurityContainer>
      <Title color='white'>Готовы оптимизировать свой бизнес?</Title>
      <CustomLayout backgroundColor='#2BA5AD' flexDirection='row' padding='0 380px'>
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
      </CustomLayout>
    </SecurityContainer>
  );
};

const CustomLayout = styled(Layout)`
  background-color: #2BA5AD;
  flex-direction: row;
  padding: 0 380px;
  
  ${media.down('xl')} { padding: 40px 300px; }
    ${media.down('lg')} { padding: 35px 200px; }
    ${media.down('xm')} { padding: 30px 100px; }
    ${media.down('sm')} { padding: 10px; }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
  ${media.down('sm')} {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${media.down('sm')} {
    align-items: center;
    text-align: center;
    order: 2;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  ${media.down('sm')} {
    justify-content: center;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;

  ${media.down('xm')} {
    max-width: 400px;
  }
  
  ${media.down('sm')} {
    justify-content: center;
    margin-bottom: 30px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  ${media.down('sm')} {
    max-width: 80%;
  }
`;

const SecurityContainer = styled.section`
  padding: 60px 0;
  background: #2BA5AD;

  ${media.down('sm')} {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
    padding: 40px 0 0;
    margin: 0;
  }
`;

export default RequestForm;