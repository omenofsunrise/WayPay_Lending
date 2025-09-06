import React from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import Descript from '../ui/Descript';
import RequestContainer from './RequestContainer';

const RequestForm: React.FC = () => {

  return (
    <SecurityContainer>
        <Title>Готовы оптимизировать свой бизнес?</Title>
        <Descript>Оставьте заявку и мы свяжемся с вами</Descript>
        <RequestContainer />
    </SecurityContainer>
  );
};

const SecurityContainer = styled.section`
  padding: 80px 20px;

  @media (max-width: 768px) {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
    padding: 0 20px;
    margin: 5px 20px 34px 20px;
  }
`;

export default RequestForm;