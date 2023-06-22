import axios from "axios";
import { Endpoint } from "../config/endpoints";
import { Customer, LoginInputs } from "../config/types";
import { fetchWithPayload } from "./genericServices";

export const register = async (customer: Customer) => {
  return fetchWithPayload(Endpoint.REGISTER, "POST", {
    username: customer.username,
    email: customer.email,
    password: customer.password,
  });
};

export const login = async (loginPayload: LoginInputs) => {
  return axios.post(Endpoint.LOGIN, loginPayload);
};
