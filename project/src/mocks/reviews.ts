import {Reviews} from '../types/reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Thu Feb 24 2022 02:30:17 GMT+0300 (GMT+03:00)',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },

  {
    comment: 'The room was quite spacious, comfortable bed, staff was super helpful! Location is great. Nice priced, good value for Amsterdam. Definitely will come back again.',
    date: 'Thu Feb 20 2022 00:10:10 GMT+0300 (GMT+03:00)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Max',
    },
  },

  {
    comment: 'Staff were extremely accommodating, let us check out an hour later free of charge! Over all decor of the hotel was fabulous. Loved it and would stay again.',
    date: 'Thu Feb 25 2022 12:10:10 GMT+0300 (GMT+03:00)',
    id: 3,
    rating: 1,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Jessica',
    },
  },

  {
    comment: 'The style of the room was very special but we liked it. We liked the size of the bed very much. Also the location of the hotel is good. The staf is very friendly and helpfull. Would stay again if I return to Amsterdam.',
    date: 'Thu Feb 23 2022 17:12:10 GMT+0300 (GMT+03:00)',
    id: 5,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Molly',
    },
  },
];
