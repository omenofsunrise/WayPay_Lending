import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const StyledTitle = styled.h1`
  font-size: 2.7rem;
  color: black;
  text-align: left;
  font-weight: 700;
  font-style: bold;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    padding: 0 5px;
  }
`;

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <StyledTitle className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;