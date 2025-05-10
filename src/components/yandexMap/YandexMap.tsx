'use client';

import { useEffect, useState } from 'react';

type YandexMapLang = 'ru_RU' | 'tr_TR' | 'en_US' | 'en_RU' | 'ru_UA' | 'uk_UA';

interface MapComponents {
  YMaps: React.ComponentType<{
    query: {
      apikey?: string;
      lang: YandexMapLang;
      load: string;
    };
    version: string;
    children: React.ReactNode;
  }>;
  Map: React.ComponentType<{
    defaultState: {
      center: [number, number];
      zoom: number;
      controls: string[];
    };
    className?: string;
    modules: string[];
    children: React.ReactNode;
  }>;
  Placemark: React.ComponentType<{
    geometry: [number, number];
    properties: {
      balloonContent: string;
    };
    options: {
      iconLayout: string;
      iconImageHref: string;
      iconImageSize: [number, number];
      iconImageOffset: [number, number];
    };
    modules: string[];
  }>;
}

type YandexMapType = {
  customCssClass?: string;
}

const YandexMap = ({customCssClass}: YandexMapType) => {
  const [Map, setMap] = useState<MapComponents | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const { YMaps, Map, Placemark } = await import('@pbe/react-yandex-maps');
        setMap({ YMaps, Map, Placemark });
      } catch (error) {
        console.error('Error loading Yandex Maps:', error);
      }
    };

    loadMap();
  }, []);

  if (!Map) {
    return <div>Загрузка карты...</div>;
  }

  const { YMaps, Map: MapComponent, Placemark } = Map;

  return (
    <YMaps
      query={{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY,
        lang: 'ru_RU' as YandexMapLang,
        load: 'package.full'
      }}
      version="2.1"
    >
      <MapComponent
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
      </MapComponent>
    </YMaps>
  );
};

export default YandexMap; 