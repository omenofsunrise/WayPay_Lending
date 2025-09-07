import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const StyledTitle = styled.h1<{ $color?: string }>`
  font-size: 2.7rem;
  color: ${props => props.$color || 'black'};
  font-weight: 900;
  font-style: bold;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    padding: 0 10px;
  }
`;

const Title: React.FC<TitleProps> = ({ children, className, color }) => {
  return (
    <StyledTitle className={className} $color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;