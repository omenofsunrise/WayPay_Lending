import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';
import Descript from '../ui/Descript';

interface VideoItem {
  src: string;
  poster: string;
  title: string;
}

const InterfaceForm: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addVideoRef = useCallback((index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  const desktopVideos: VideoItem[] = [
    { src: 'calculator.', poster: '/photos/empty_clients.png', title: 'Поиск по базе из более тысячи клиентов!' },
    { src: 'calculator.', poster: '/photos/clients.png', title: 'Клиент не сможет скрыть свои задолженности и текущие рассрочки!' },
    { src: 'calculator.', poster: '/photos/client_dossier.png', title: 'Подробные досье на каждого клиента собирается с помощью краудсорсинга!' },
    { src: 'calculator.mp4', poster: '/photos/calculator.png', title: 'Наш калькулятор рассрочек' },
    { src: 'calculator.', poster: '/photos/pin-code.png', title: 'Сайт спроектирован так, чтобы обеспечивать одновременно и безопасность и удобство!' },
    { src: 'calculator.', poster: '/photos/analityc.png', title: 'Подробная аналитика по всем необходимым показателям!' },
    { src: 'calculator.', poster: '/photos/employee_statistic.png', title: 'Статистика по сотрудникам и многое другое!' },
    { src: 'calculator.', poster: 'mobile-photos/mobile-menu.jpg', title: 'А ещё, для вашего удобства мы сделали мобильное приложение' }
  ];

  const mobileVideos: VideoItem[] = [
    { src: '/videos/mobile-2.mp4', poster: 'mobile-photos/mobile-credits.jpg', title: 'Вы можете контролировать договоры прямо с телефона!' },
    { src: '/videos/mobile-3.mp4', poster: 'mobile-photos/mobile-payments.jpg', title: 'Можно предупредить клиента о платеже одним нажатием!' },
    { src: '/videos/mobile-1.mp4', poster: 'mobile-photos/mobile-calculator.jpg', title: 'У нас есть калькулятор рассрочек' },
    { src: '/videos/mobile-4.mp4', poster: 'mobile-photos/mobile-todo.jpg', title: 'Управление рабочими процессами доступно в режиме 24/7 с любого устройства.' },
    { src: '/videos/mobile-5.mp4', poster: 'mobile-photos/mobile-menu.jpg', title: 'Это лишь малая часть функционала мобильного приложения. Кроме того, у нас есть сайт WayPay CRM с основным функционалом' },
  ];

  const currentVideos = isMobile ? mobileVideos : desktopVideos;

  return (
    <SecurityContainer>
      <Title>Интерфейс WayPay</Title>
      <Descript>Простота и удобство - ключевые принципы нашей системы</Descript>
      
      <VideosContainer>
        {currentVideos.map((video, index) => (
          <VideoCard key={index}>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoWrapper $isMobile={isMobile}>
              <OptimizedVideo
                ref={addVideoRef(index)}
                src={video.src}
                poster={video.poster}
                loop
                muted
                playsInline
                preload="metadata"
                $isMobile={isMobile}
              />
            </VideoWrapper>
          </VideoCard>
        ))}
      </VideosContainer>
      
      <Disclaimer>
        *Обращаем ваше внимание, что все данные, представленные на скриншотах и видео, являются демонстрационными и не содержат реальной информации о клиентах.
      </Disclaimer>
    </SecurityContainer>
  );
};

const SecurityContainer = styled.section`
  padding: 80px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 50px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 40px;
    margin-top: 30px;
  }
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const VideoWrapper = styled.div<{ $isMobile: boolean }>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: #f5f5f5;
  width: 100%;
  
  ${props => !props.$isMobile && `
    max-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  &:hover {
    transform: translateY(-4px);
  }
`;

const OptimizedVideo = styled.video<{ $isMobile: boolean }>`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  
  ${props => !props.$isMobile && `
    max-height: 600px;
    object-fit: contain;
  `}
`;

const VideoTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 60px;
  font-style: italic;
  padding: 0 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 12px;
  }
`;

export default InterfaceForm;