import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const SimpleContactSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  text-align: center;

  ${media.down('sm')} {
    padding: 40px 15px;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #007D88;
  margin-bottom: 20px;
  
  ${media.down('sm')} {
    font-size: 26px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  ${media.down('sm')} {
    font-size: 16px;
  }
`;

const PhoneLink = styled.a`
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  color: #007D88;
  text-decoration: none;
  padding: 15px 30px;
  border: 2px solid #007D88;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  margin: 20px;

  &:hover {
    background-color: #007D88;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.2);
  }
  
  ${media.down('sm')} {
    font-size: 12px;
    padding: 5px 25px;
  }
`;

const Contacts = () => {
  return (
    <SimpleContactSection id="simple-contacts">
      <Heading>Остались вопросы?</Heading>
      <Description>
        Можете связаться с нами в любое время и задать все вопросы!
      </Description>
      <PhoneLink href="tel:+79899242424">
        +7 (989) 924-24-24
      </PhoneLink>
      <PhoneLink href="tel:+79899202020">
        +7 (989) 920-20-20
      </PhoneLink>
    </SimpleContactSection>
  );
};

export default Contacts;