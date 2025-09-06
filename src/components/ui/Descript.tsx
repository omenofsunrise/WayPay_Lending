import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const StyledTitle = styled.h3`
  font-size: 30px;
  color: rgba(80, 85, 92, 1);
  text-align: left;
  font-weight: 400;
  font-style: bold;
  margin: 10px 0 25px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 10px 5px;
  }
`;

const Descript: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <StyledTitle className={className}>
      {children}
    </StyledTitle>
  );
};

export default Descript;