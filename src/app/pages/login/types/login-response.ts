export type LoginResponse = {
  status: boolean;
  user: {
    token: string;
    expenseAppUserId: string;
    name: string;
    isVerified: boolean;
  };
};
