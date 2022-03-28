const MAX_RATING = 5;
export const getRatingPerc = (rating: number): number => Math.round(rating) / MAX_RATING * 100;
