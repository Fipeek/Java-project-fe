export type Route = {
  path: string;
  name: string;
  component: any;
};

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export type Customer = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export type LoginInputs = {
  username: string;
  password: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};
