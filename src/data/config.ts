interface ContactItem {
    title: string;
    value: string;
    type?: 'tel' | 'email';
    href?: string;
  }

export const phone = {
  title: 'Телефон',
  value: '+7 (900) 000-00-00',
  type: 'tel',
  href: 'tel:+79000000000'
};

export const email = {
  title: 'Электронная почта',
  value: 'info@autolux.ru',
  type: 'email',
  href: 'mailto:info@autolux.ru'
};

export const addressLine = '2-я Институтская ул., 7 корп. 3';

export const contacts: ContactItem[] = [
    {
      title: 'Телефон',
      value: phone.value,
      type: phone.type as 'tel' | 'email',
      href: phone.href
    },
    {
      title: 'Электронная почта',
      value: email.value,
      type: email.type as 'tel' | 'email',
      href: email.href
    },
    {
      title: 'Юридический адрес',
      value: addressLine
    },
    {
      title: 'Фактический адрес',
      value: addressLine
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


