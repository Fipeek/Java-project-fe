import axios from "axios";
import { Endpoint } from "../config/endpoints";
import { Product } from "../config/types";

export const getProducts = (): Promise<Product[]> =>
  axios.get(Endpoint.PRODUCTS).then((response) => response.data);

export const deleteProduct = (id: number): Promise<Product[]> =>
  axios.delete(Endpoint.DELETE_PRODUCT + id).then((response) => response.data);

export const addProduct = (product: Product): Promise<Product[]> =>
  axios.post(Endpoint.ADD_PRODUCT, product).then((response) => response.data);

export const updateProduct = (product: Product): Promise<Product[]> => {
  return axios
    .put(Endpoint.PRODUCTS + "/" + product.id, product)
    .then((response) => response.data);
};

export const getCart = (cartId: number) =>
  axios.get(Endpoint.GET_CART + "/" + cartId).then((response) => response.data);
