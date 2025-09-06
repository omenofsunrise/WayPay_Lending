import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import GradientButton from '../ui/buttons/GradientButton';

const Container = styled.div`
  background: white;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  position: relative;
  margin-top: 20px;
`;

const Label = styled.label<{ isFocused: boolean; hasValue: boolean }>`
  position: absolute;
  left: 16px;
  top: ${props => (props.isFocused || props.hasValue ? '0' : '50%')};
  transform: ${props => (props.isFocused || props.hasValue ? 'translateY(-50%)' : 'translateY(-50%)')};
  font-size: ${props => (props.isFocused || props.hasValue ? '0.9em' : '1.5em')};
  color: ${props => (props.isFocused ? '#007d88' : '#999')};
  background: white;
  padding: 0 4px;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1.5em;
  transition: border-color 0.3s ease;
  color: black;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #007d88;
    box-shadow: 0 0 0 2px rgba(0, 125, 136, 0.1);
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleFocus = (field: string) => () => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <Container className={className}>
      <Form onSubmit={handleSubmit}>
        <FieldGroup>
          <Label 
            htmlFor="fullName" 
            isFocused={focusedField === 'fullName'} 
            hasValue={!!formData.fullName}
          >
            ФИО
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            onFocus={handleFocus('fullName')}
            onBlur={handleBlur}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label 
            htmlFor="email" 
            isFocused={focusedField === 'email'} 
            hasValue={!!formData.email}
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            onFocus={handleFocus('email')}
            onBlur={handleBlur}
            required
          />
        </FieldGroup>

        <FieldGroup>
          <Label 
            htmlFor="phone" 
            isFocused={focusedField === 'phone'} 
            hasValue={!!formData.phone}
          >
            Телефон
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            onFocus={handleFocus('phone')}
            onBlur={handleBlur}
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