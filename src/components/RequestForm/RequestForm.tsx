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
  width: 100%;
  padding: 80px 20px;
`;

export default RequestForm;