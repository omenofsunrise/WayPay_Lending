import React, { useState } from 'react';
import styled from 'styled-components';
import GradientButton from '../ui/buttons/GradientButton';
import Button from '../ui/buttons/Button';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  position: relative;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InlineFieldGroup = styled(FieldGroup)`
  flex: 1;
`;

const Label = styled.label<{ isFocused: boolean; hasValue: boolean; isComment?: boolean }>`
  position: absolute;
  left: 16px;
  top: ${props => {
    if (props.isComment) {
      return (props.isFocused || props.hasValue) ? '0' : '17%';
    }
    return (props.isFocused || props.hasValue) ? '0' : '50%';
  }};
  transform: ${props => (props.isFocused || props.hasValue) ? 'translateY(-50%)' : 'translateY(-50%)'};
  font-size: ${props => (props.isFocused || props.hasValue) ? '0.9em' : '1.5em'};
  color: ${props => (props.isFocused ? '#50555C' : '#999')};
  padding: 0 4px;
  transition: all 0.2s ease;
  pointer-events: none;
  background: white;
  z-index: 1;
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

const TextArea = styled.textarea`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1.5em;
  transition: border-color 0.3s ease;
  color: black;
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  
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

const Message = styled.div<{ isError?: boolean }>`
  margin-top: 16px;
  padding: 12px;
  border-radius: 6px;
  background: ${props => props.isError ? '#ffebee' : '#e8f5e8'};
  color: ${props => props.isError ? '#c62828' : '#2e7d32'};
  text-align: center;
`;

const LoadingSpinner = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid #007d88;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionalText = styled.span`
  color: #999;
  font-size: 0.8em;
  margin-left: 4px;
  font-weight: normal;
`;

const ApplyButton = styled(Button)`
  background: none;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  box-shadow: none;
  font-size: 20px;
  margin: 0 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }  
`;

interface RequestContainerProps {
  onSubmit?: (data: {
    fullName: string;
    email: string;
    phone: string;
    comment?: string;
  }) => void;
  className?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
}

const RequestContainer: React.FC<RequestContainerProps> = ({ onSubmit, className }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comment: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('https://web.waypay.one:5002/api/Feedback/submit-application', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result: ApiResponse = await response.json();
        setMessage({
          text: result.message || 'Заявка успешно отправлена!',
          isError: false
        });
        setFormData({ fullName: '', email: '', phone: '', comment: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        setMessage({
          text: errorData?.message || `Ошибка ${response.status}: ${response.statusText}`,
          isError: true
        });
      }
    } catch (error) {
      setMessage({
        text: 'Ошибка сети. Проверьте подключение к интернету.',
        isError: true
      });
    } finally {
      setIsLoading(false);
    }

    onSubmit?.(formData);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
            disabled={isLoading}
          />
        </FieldGroup>

        <Row>
          <InlineFieldGroup>
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
              disabled={isLoading}
            />
          </InlineFieldGroup>

          <InlineFieldGroup>
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
              disabled={isLoading}
            />
          </InlineFieldGroup>
        </Row>

        <FieldGroup>
          <Label 
            htmlFor="comment" 
            isFocused={focusedField === 'comment'} 
            hasValue={!!formData.comment}
            isComment={true}
          >
            Комментарий <OptionalText>(необязательно)</OptionalText>
          </Label>
          <TextArea
            id="comment"
            value={formData.comment}
            onChange={handleInputChange('comment')}
            onFocus={handleFocus('comment')}
            onBlur={handleBlur}
            disabled={isLoading}
            rows={4}
          />
        </FieldGroup>

        <ButtonContainer>
          <ApplyButton
            type="submit" 
            disabled={isLoading}
          >
            <ButtonContent>
              {isLoading && <LoadingSpinner />}
              {isLoading ? 'Отправка...' : 'Отправить заявку'}
            </ButtonContent>
          </ApplyButton>
        </ButtonContainer>

        {message && (
          <Message isError={message.isError}>
            {message.text}
          </Message>
        )}
      </Form>
    </Container>
  );
};

export default RequestContainer;