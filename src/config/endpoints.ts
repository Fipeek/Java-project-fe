export class Endpoint {
  static readonly BASE = "http://localhost:8080/api/";
  static readonly LOGIN = Endpoint.BASE + "login";
  static readonly REGISTER = Endpoint.BASE + "register";
  static readonly PRODUCTS = Endpoint.BASE + "products";
  static readonly DELETE_PRODUCT = Endpoint.BASE + "products/";
  static readonly ADD_PRODUCT = Endpoint.BASE + "addProduct";
  static readonly UPDATE_PRODUCT = Endpoint.BASE + "products/";
  static readonly GET_CART = Endpoint.BASE + "cart";
}
