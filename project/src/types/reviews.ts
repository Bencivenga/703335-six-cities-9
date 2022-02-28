import {User} from './offers';

export type Review = {
  comment: string;
  date: Date | string;
  id: number;
  rating: number;
  user: User;
};

export type Reviews = Review[];
