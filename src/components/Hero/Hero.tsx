import React, { useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const floatReverse = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const HeroContainer = styled.section`
  padding: 60px 20px 30px 20px;
  background: linear-gradient(135deg, #2CA5AD 0%, #1E7A82 50%, #0F4A4F 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 10px);
    pointer-events: none;
  }
  
  ${media.down('sm')} {
    padding: 40px 16px 20px 16px;
    min-height: auto;
    align-items: flex-start;
  }
`;

const FloatingShape = styled.div<{ size: number; top: string; left: string; delay: number; duration: number; reverse?: boolean }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  left: ${props => props.left};
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  pointer-events: none;
  
  animation: ${props => props.reverse 
    ? css`${floatReverse} ${props.duration}s ease-in-out infinite` 
    : css`${float} ${props.duration}s ease-in-out infinite`
  };
  animation-delay: ${props => props.delay}s;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(255, 255, 255, 0.02);
    border-radius: 50%;
    animation: ${pulse} 4s ease-in-out infinite;
  }
  
  ${media.down('sm')} {
    opacity: 0.5;
    width: ${props => props.size * 0.6}px;
    height: ${props => props.size * 0.6}px;
  }
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(10deg);
  transform-origin: center top;
  animation: ${shimmer} 20s linear infinite;
  pointer-events: none;
  opacity: 0.5;
  
  ${media.down('sm')} {
    background-size: 30px 30px;
    opacity: 0.3;
  }
`;

const GlowingOrb = styled.div<{ size: number; top: string; right: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  right: ${props => props.right};
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(30px);
  animation: ${pulse} ${props => 5 + props.delay}s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
  
  ${media.down('sm')} {
    width: ${props => props.size * 0.4}px;
    height: ${props => props.size * 0.4}px;
    filter: blur(20px);
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.03));
  transform: skewY(-3deg);
  transform-origin: bottom left;
  pointer-events: none;
  
  ${media.down('sm')} {
    height: 50px;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  gap: 40px;
  
  ${media.down('lg')} {
    gap: 30px;
  }
  
  ${media.down('md')} {
    gap: 20px;
  }
  
  ${media.down('sm')} {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: flex-start;
  z-index: 2;
  order: 1;
  animation: ${float} 6s ease-in-out infinite;
  cursor: pointer;
  
  ${media.down('lg')} {
    flex: 0 0 50%;
  }
  
  ${media.down('md')} {
    flex: 0 0 55%;
  }
  
  ${media.down('sm')} {
    flex: 0 0 auto;
    justify-content: center;
    width: 100%;
    order: 2;
    animation: ${float} 4s ease-in-out infinite;
    margin-top: 20px;
  }
`;

const MacbookDesktop = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02) translateY(-5px);
  }
  
  ${media.down('sm')} {
    display: none;
  }
`;

const MacbookMobile = styled.img`
  display: nonedisplay: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2));
  
  &:hover {
    transform: scale(1.02);
  }
  
  ${media.down('sm')} {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const TextContainer = styled.div`
  flex: 0 0 55%;
  position: relative;
  z-index: 3;
  order: 2;
  
  ${media.down('lg')} {
    flex: 0 0 50%;
  }
  
  ${media.down('sm')} {
    flex: 1;
    width: 100%;
    padding: 0;
    text-align: center;
    order: 1;
  }
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 900;
  color: white;
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.2;
  position: relative;
  
  ${media.down('lg')} {
    font-size: clamp(24px, 4vw, 40px);
  }
  
  ${media.down('md')} {
    font-size: clamp(22px, 3.5vw, 36px);
  }
  
  ${media.down('sm')} {
    text-align: center;
    font-size: clamp(24px, 6vw, 32px);
    margin-bottom: 15px;
    padding: 0;
  }
`;

const Description = styled.p`
  color: white;
  text-align: left;
  font-size: clamp(18px, 2.5vw, 24px);
  line-height: 1.6;
  margin-bottom: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  ${media.down('lg')} {
    font-size: clamp(16px, 2.2vw, 22px);
  }
  
  ${media.down('md')} {
    font-size: clamp(15px, 2vw, 20px);
    line-height: 1.5;
  }
  
  ${media.down('sm')} {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    br {
      display: none;
    }
  }
`;

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  const handleMacbookClick = () => {
    window.open('https://web.waypay.one', '_blank');
  };

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current;
      while (particles.firstChild) {
        particles.removeChild(particles.firstChild);
      }
      
      const particleCount = window.innerWidth < 768 ? 10 : 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 3;
        
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;
        particle.style.borderRadius = '50%';
        particle.style.bottom = '-50px';
        
        particle.style.animation = `${float.getName()} ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = `${delay}s`;
        
        const blur = document.createElement('div');
        blur.style.position = 'absolute';
        blur.style.width = '100%';
        blur.style.height = '100%';
        blur.style.background = 'inherit';
        blur.style.borderRadius = 'inherit';
        blur.style.filter = 'blur(3px)';
        
        particle.appendChild(blur);
        particles.appendChild(particle);
      }
    }
  }, []);

  return (
    <HeroContainer>
      <FloatingShape size={300} top="10%" left="5%" delay={0} duration={8} />
      <FloatingShape size={200} top="60%" left="15%" delay={2} duration={6} reverse />
      <FloatingShape size={400} top="20%" left="80%" delay={1} duration={10} />
      <FloatingShape size={150} top="70%" left="70%" delay={3} duration={5} reverse />
      
      <GlowingOrb size={500} top="-100px" right="-100px" delay={0} />
      <GlowingOrb size={300} top="300px" right="200px" delay={2} />
      <GlowingOrb size={400} top="500px" right="-50px" delay={1} />
      
      <GridPattern />
      
      <ParticlesContainer ref={particlesRef} />
      
      <Wave />
      
      <HeroContent>
        <ImageContainer onClick={handleMacbookClick}>
          {/* <MacbookDesktop src="/Images/macbook-pro.png" alt="WayPay на Macbook Pro" /> */}
          <MacbookMobile src="/Images/cut-macbook-pro.png" alt="WayPay на мобильном" />
        </ImageContainer>
        
        <TextContainer>
          <Title>Удобное хранение и управление договорами</Title>
          
          <Description>
            Современное решение для автоматизации учёта рассрочек, клиентов и финансов вашего бизнеса.
            <br />
            <br />
            Переходите на цифровой формат работы уже сегодня!
          </Description>
        </TextContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;