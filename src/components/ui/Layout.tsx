import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../styles/breakpoints';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'grid';
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

const responsivePadding = css<Omit<LayoutProps, 'children' | 'className'>>`
  padding: ${({ padding = '50px 380px' }) => padding};

  ${({ padding }) => !padding && css`
    ${media.down('xl')} { padding: 40px 300px; }
    ${media.down('lg')} { padding: 35px 200px; }
    ${media.down('xm')} { padding: 30px 100px; }
    ${media.down('sm')} { padding: 10px; }
  `}

  ${({ padding }) => padding && css`
    ${media.down('xm')} { padding: calc(${padding} * 0.7); }
    ${media.down('sm')} { padding: calc(${padding} * 0.5); }
    ${media.down('xs')} { padding: calc(${padding} * 0.35); }
  `}
`;

const StyledDiv = styled.div<Omit<LayoutProps, 'children' | 'className'>>`
  ${responsivePadding}
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ backgroundColor = '#f5f5f5' }) => backgroundColor};
  border-radius: ${({ borderRadius = '8px' }) => borderRadius};
  display: ${({ display = 'block' }) => display};
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  gap: ${({ gap = 'normal' }) => gap};
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
