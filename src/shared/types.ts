export type User = {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type UsersResponse = {
  data: User[];
  page: number;
  per_page: number;
  support: object;
  total: number;
  total_pages: number;
};

export type UserFormData = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  department: string;
  contribution: number;
  active: boolean;
};
