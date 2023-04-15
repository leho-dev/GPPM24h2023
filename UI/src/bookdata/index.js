import {
  aluminum,
  oxy,
  hydro1,
  hydro2,
  hoa8,
  carbon,
  fluorine,
  nitrogen,
  dia8,
  heMatTroi,
} from '../assets/img/book';

export const books = [
  {
    id: 1,
    title: 'Sách hoá học',
    banner: hoa8,
    data: [
      {
        id: 1,
        page: [
          {
            title: 'Phân tử Aluminum',
            src: aluminum,
          },
        ],
      },
      {
        id: 2,
        page: [
          {
            title: 'Phân tử Carbon',
            src: carbon,
          },
          {
            title: 'Phân tử Fluorine',
            src: fluorine,
          },
          {
            title: 'Phân tử Nitrogen',
            src: nitrogen,
          },
        ],
      },
      {
        id: 3,
        page: [
          {
            title: 'Phân tử Hydro',
            src: hydro1,
          },
          {
            title: 'Phân tử Oxy',
            src: oxy,
          },
          {
            title: 'Phân tử Hydro',
            src: hydro2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Sách địa lý',
    banner: dia8,
    data: [
      {
        id: 1,
        page: [
          {
            title: 'Hệ mặt trời',
            src: heMatTroi,
          },
        ],
      },
    ],
  },
];
