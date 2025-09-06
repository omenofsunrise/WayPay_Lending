import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const StyledTitle = styled.h1`
  font-size: 3.5rem;
  color: black;
  text-align: left;
  font-weight: 700;
  font-style: bold;
  margin: 0;
  padding: 0;
`;

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <StyledTitle className={className}>
      {children}
    </StyledTitle>
  );
};

export default Title;