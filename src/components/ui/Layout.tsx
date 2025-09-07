import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const StyledDiv = styled.div<Omit<LayoutProps, 'children' | 'className'>>`
  padding: ${({ padding = '0 200px' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
  border-radius: ${({ borderRadius = '8px' }) => borderRadius};

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  ...styleProps
}) => {
  return (
    <StyledDiv className={`styled-div ${className}`} {...styleProps}>
      {children}
    </StyledDiv>
  );
};

export default Layout;