'use client';

import { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

type YandexMapType = {
  customCssClass?: string;
}

const YandexMap = ({customCssClass}: YandexMapType) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Загрузка карты...</div>;
  }

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY as string,
        lang: 'ru_RU',
        load: 'package.full'
      }}
      version="2.1"
    >
      <Map
        defaultState={{
          center: [55.721458, 37.781748],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl']
        }}
        className={customCssClass}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark
          geometry={[55.721458, 37.781748]}
          properties={{
            balloonContent: 'Наш офис'
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/marker.png',
            iconImageSize: [67, 88],
            iconImageOffset: [-33.5, -44]
          }}
          modules={['geoObject.addon.balloon']}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap; 