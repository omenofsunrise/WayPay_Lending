import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

declare global {
  interface Window {
    ymaps: any;
  }
}

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  coordinates: string;
  schedules: Schedule[];
}

interface Schedule {
  id: number;
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  isWorking: boolean;
}

interface ApiResponse {
  branch: Branch;
  distance: number;
}

const MapContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

  ${media.down('sm')} {
    padding: 40px 16px;
  }
`;

const MapContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
  color: #2CA5AD;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #2CA5AD;
    border-radius: 2px;
  }

  ${media.down('sm')} {
    font-size: 28px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 18px;
  max-width: 800px;
  margin: 30px auto 40px;
  line-height: 1.6;

  ${media.down('sm')} {
    font-size: 16px;
    margin: 20px auto 30px;
  }
`;

const YandexMap = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 3px solid white;

  ${media.down('sm')} {
    height: 400px;
    border-radius: 12px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 20px;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2CA5AD;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #dc3545;
  padding: 20px;
  background: white;
  border-radius: 10px;
  margin-top: 20px;
`;

const OfficesMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offices, setOffices] = useState<Branch[]>([]);
  const yandexMapRef = useRef<any>(null);
  const placemarksRef = useRef<any[]>([]);

  // Координаты Грозного (центр карты по умолчанию)
  const GROZNY_COORDS = [43.3179, 45.6981];

  useEffect(() => {
    fetchOffices();
  }, []);

  const fetchOffices = async () => {
    try {
      const response = await fetch('https://web.waypay.one:5001/api/Branch/nearest?maxDistance=50000');
      const data: ApiResponse[] = await response.json();
      setOffices(data.map(item => item.branch));
    } catch (err) {
      console.error('Error fetching offices:', err);
      setError('Не удалось загрузить список офисов');
    } finally {
      setIsLoading(false);
    }
  };

  const loadYandexMaps = () => {
    if (window.ymaps) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=d1a60f70-3b70-4cac-8d38-50144a64a394&lang=ru_RU';
    script.onload = () => {
      window.ymaps.ready(initMap);
    };
    script.onerror = () => {
      setError('Не удалось загрузить карту');
      setIsLoading(false);
    };
    document.body.appendChild(script);
  };

    useEffect(() => {
        if (offices.length > 0 && !isLoading) {
            loadYandexMaps();
        }
    }, [offices, isLoading, loadYandexMaps]);

  const initMap = () => {
    if (!mapRef.current || !window.ymaps) return;

    try {
      // Создаем карту
      yandexMapRef.current = new window.ymaps.Map(mapRef.current, {
        center: GROZNY_COORDS,
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      });


      // Добавляем кластеризатор для красивой группировки меток
      const clusterer = new window.ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        clusterIconColor: '#2CA5AD',
        clusterDisableClickZoom: false,
        groupByCoordinates: false,
        clusterOpenBalloonOnClick: true,
        clusterIconContentLayout: window.ymaps.templateLayoutFactory.createClass(
          '<div style="color: white; font-weight: bold; font-size: 14px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">{{ properties.geoObjects.length }}</div>'
        ),
      });

      // Создаем метки для каждого офиса
      const placemarks = offices.map((office, index) => {
        const [lat, lng] = office.coordinates.split(',').map(coord => parseFloat(coord.trim()));
        
        // Создаем контент для балуна
        const balloonContent = `
          <div style="padding: 20px; max-width: 280px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#2CA5AD"/>
              </svg>
              <h3 style="color: #2CA5AD; margin: 0; font-size: 18px; font-weight: 600;">${office.name}</h3>
            </div>
            
            <div style="margin-bottom: 12px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 8px; flex-shrink: 0;">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#6c757d" fill-opacity="0.5"/>
                </svg>
                <p style="margin: 0; font-size: 14px; color: #495057; line-height: 1.4;">${office.address}</p>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#2CA5AD"/>
                </svg>
                <a href="tel:${office.phone}" style="color: #2CA5AD; text-decoration: none; font-weight: 500; font-size: 14px;">${office.phone}</a>
              </div>
            </div>
            
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 12px;">
              <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.1.8-1.2-4.5-2.7V7z" fill="#2CA5AD"/>
                </svg>
                <span style="font-weight: 600; color: #2CA5AD; font-size: 14px;">Режим работы</span>
              </div>
              ${getScheduleHTML(office.schedules)}
            </div>
          </div>
        `;

const placemark = new window.ymaps.Placemark([lat, lng], {
  hintContent: office.name,
  balloonContent: balloonContent,
  balloonContentBody: balloonContent,
}, {
  iconLayout: 'default#imageWithContent',
  iconImageHref: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.56 20.82C12.3968 20.9372 12.201 21.0003 12 21.0003C11.7991 21.0003 11.6032 20.9372 11.44 20.82C6.61102 17.378 1.48602 10.298 6.66702 5.182C8.08937 3.78285 10.0049 2.99912 12 3C14 3 15.919 3.785 17.333 5.181C22.514 10.297 17.389 17.376 12.56 20.82Z" fill="#007D88" stroke="#007D88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2715 7.26367C12.9011 7.32612 13.493 7.60433 13.9443 8.05566C14.4601 8.57139 14.75 9.27065 14.75 10C14.75 10.7293 14.4601 11.4286 13.9443 11.9443C13.4286 12.4601 12.7293 12.75 12 12.75C11.2707 12.75 10.5714 12.4601 10.0557 11.9443C9.53994 11.4286 9.25 10.7293 9.25 10C9.25 9.27065 9.53994 8.57139 10.0557 8.05566C10.5714 7.53994 11.2707 7.25 12 7.25L12.2715 7.26367Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),
  iconImageSize: [24, 24],
  iconImageOffset: [-12, -24],
  iconContentOffset: [0, 0],
  balloonCloseButton: true,
  balloonMaxWidth: 320,
  balloonPanelMaxMapArea: Infinity,
  hideIconOnBalloonOpen: false,
});
        // Добавляем обработчик открытия балуна для изменения иконки
        placemark.events.add('balloonopen', () => {
          // Можно добавить логику для изменения иконки при открытии
        });

        placemark.events.add('balloonclose', () => {
          // Можно добавить логику для возврата иконки при закрытии
        });

        return placemark;
      });

      // Добавляем метки в кластеризатор
      clusterer.add(placemarks);
      
      // Добавляем кластеризатор на карту
      yandexMapRef.current.geoObjects.add(clusterer);

      // Сохраняем ссылки на метки для возможного обновления
      placemarksRef.current = placemarks;

    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Не удалось инициализировать карту');
    } finally {
      setIsLoading(false);
    }
  };

  const getScheduleHTML = (schedules: Schedule[]) => {
    const workingDays = schedules
      .filter(s => s.isWorking)
      .sort((a, b) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days.indexOf(a.dayOfWeek) - days.indexOf(b.dayOfWeek);
      });

    if (workingDays.length === 0) {
      return '<div style="color: #6c757d; font-size: 13px;">График работы уточняйте по телефону</div>';
    }

    const dayNames: { [key: string]: string } = {
      'Monday': 'Понедельник',
      'Tuesday': 'Вторник',
      'Wednesday': 'Среда',
      'Thursday': 'Четверг',
      'Friday': 'Пятница',
      'Saturday': 'Суббота',
      'Sunday': 'Воскресенье'
    };

    const formatTime = (time: string) => time.substring(0, 5);

    return workingDays.map(day => `
      <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
        <span style="color: #6c757d;">${dayNames[day.dayOfWeek]}</span>
        <span style="color: #2CA5AD; font-weight: 500;">${formatTime(day.openTime)} - ${formatTime(day.closeTime)}</span>
      </div>
    `).join('');
  };

  return (
    <MapContainer id="offices">
      <MapContent>
        <Title>Нами пользуются</Title>
        <Description>

        </Description>
        
        <div style={{ position: 'relative' }}>
          <YandexMap ref={mapRef} />
          
          {isLoading && (
            <LoadingOverlay>
              <LoadingSpinner />
            </LoadingOverlay>
          )}
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </MapContent>
    </MapContainer>
  );
};

export default OfficesMap;