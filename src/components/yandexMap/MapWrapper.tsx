'use client';

import dynamic from 'next/dynamic';

const YandexMap = dynamic(() => import('./YandexMap'), {
  ssr: false,
  loading: () => <div>Загрузка карты...</div>
});

type MapWrapperType = {
  customCssClass?: string;
}

const MapWrapper = ({customCssClass}: MapWrapperType) => {
  return <YandexMap customCssClass={customCssClass} />;
};

export default MapWrapper; 