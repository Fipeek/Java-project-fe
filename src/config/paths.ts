import Admin from "../Components/Containers/Admin/Admin";
import { Authorization } from "../Components/Containers/Authorization/Authorization";
import Products from "../Components/Containers/Products/Products";
import { Route } from "./types";

export const routes: Route[] = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/Authorization",
    name: "Login",
    component: Authorization,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
];
