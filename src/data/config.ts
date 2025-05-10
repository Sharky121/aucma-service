interface ContactItem {
    title: string;
    value: string;
    type?: 'tel' | 'email';
    href?: string;
  }

export const phone = 79005481212;

export const contacts: ContactItem[] = [
    {
      title: 'Телефон',
      value: '+7 (900) 000-00-00',
      type: 'tel',
      href: 'tel:+79000000000'
    },
    {
      title: 'Электронная почта',
      value: 'info@autolux.ru',
      type: 'email',
      href: 'mailto:info@autolux.ru'
    },
    {
      title: 'Юридический адрес',
      value: '2-я Институтская ул., 7, корп. 3'
    },
    {
      title: 'Фактический адрес',
      value: '2-я Институтская ул., 7, корп. 3'
    },
    {
      title: 'ИНН',
      value: '56457567567'
    },
    {
      title: 'КПП',
      value: '7807456334534'
    },
    {
      title: 'ОГРН',
      value: '132452456367'
    },
    {
      title: 'ОКПО',
      value: '366745678657'
    }
];