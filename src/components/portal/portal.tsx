'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    children: ReactNode;
}

const Portal = ({ children }: IPortal) => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        // Создаем div только на клиенте
        const el = document.createElement('div');
        document.body.appendChild(el);
        setContainer(el);

        // Очистка при размонтировании компонента
        return () => {
            document.body.removeChild(el);
        };
    }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится один раз после монтирования

    // Рендерим портал, только если контейнер создан (на клиенте)
    return container ? createPortal(children, container) : null;
};

export default Portal;
