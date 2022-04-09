export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type UserData = {
  user: User;
  token: string;
}
