import React from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import Descript from '../ui/Descript';
import RequestContainer from './RequestContainer';
import Layout from '../ui/Layout';

const RequestForm: React.FC = () => {

  return (
    <Layout>
      <SecurityContainer>
          <Title>Готовы оптимизировать свой бизнес?</Title>
          <Descript>Оставьте заявку и мы свяжемся с вами</Descript>
          <RequestContainer />
      </SecurityContainer>
    </Layout>
  );
};

const SecurityContainer = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
    padding: 0;
    margin: 5px 20px 34px 20px;
  }
`;

export default RequestForm;