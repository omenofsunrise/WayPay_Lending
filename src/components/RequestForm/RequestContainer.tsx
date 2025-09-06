import React from 'react';
import styled from 'styled-components';
import GradientButton from '../ui/buttons/GradientButton';

const Container = styled.div`
  background: white;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 2em;
  font-weight: 400;
  text-align: left;
  color: black;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1.5em;
  transition: border-color 0.3s ease;
  color: black;
  
  &:focus {
    outline: none;
    border-color: #007d88;
    box-shadow: 0 0 0 2px rgba(0, 125, 136, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

interface RequestContainerProps {
  onSubmit?: (data: {
    fullName: string;
    email: string;
    phone: string;
  }) => void;
  className?: string;
}

const RequestContainer: React.FC<RequestContainerProps> = ({ onSubmit, className }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Container className={className}>
      <Form onSubmit={handleSubmit}>
        <FieldGroup>
          <Label htmlFor="fullName">ФИО</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Введите ваше полное имя"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Введите ваш email"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Введите ваш телефон"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            required
          />
        </FieldGroup>

        <ButtonContainer>
          <GradientButton type="submit">
            Отправить заявку
          </GradientButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default RequestContainer;