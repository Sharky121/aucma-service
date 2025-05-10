declare module '@pbe/react-yandex-maps' {
  import { FC, PropsWithChildren } from 'react';

  export interface YMapProvider {
    query: {
      apikey?: string;
      lang: 'ru_RU' | 'tr_TR' | 'en_US' | 'en_RU' | 'ru_UA' | 'uk_UA';
      load: string;
    };
    version: string;
  }

  export interface YMapProps {
    defaultState: {
      center: [number, number];
      zoom: number;
      controls: string[];
    };
    className?: string;
    modules: string[];
  }

  export interface YPlacemarkProps {
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
  }

  export const YMaps: FC<PropsWithChildren<YMapProvider>>;
  export const Map: FC<PropsWithChildren<YMapProps>>;
  export const Placemark: FC<YPlacemarkProps>;
} 