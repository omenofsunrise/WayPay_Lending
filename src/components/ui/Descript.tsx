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
  margin: 20px 0;
  padding: 0;
`;

const Descript: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <StyledTitle className={className}>
      {children}
    </StyledTitle>
  );
};

export default Descript;