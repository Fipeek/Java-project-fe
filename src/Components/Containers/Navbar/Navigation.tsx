import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, H1, Ul } from "./utils/utils";
import { Route } from "../../../config/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useCustomer } from "../../Hooks/useCustomer";
import Admin from "../Admin/Admin";
import { Backdrop } from "@mui/material";
type Props = {
  routes: Route[];
};

const Navigation: React.FC<Props> = (props) => {
  const { routes } = props;
  const homeRoute = routes[0];
  const navigate = useNavigate();
  const { isLoggedIn } = useCustomer();
  const handleNavigateRegister = () => {
    navigate("/authorization");
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Nav>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      <H1>
        <Link to={homeRoute.path}>{homeRoute.name}</Link>
      </H1>
      <Ul>
        {!isLoggedIn ? (
          <li>
            <AccountBoxIcon
              sx={{
                color: "white",
                marginTop: "0.3rem",
                fontSize: "2rem",
              }}
              onClick={handleNavigateRegister}
            ></AccountBoxIcon>
          </li>
        ) : null}
        {isLoggedIn ? (
          <li>
            <ShoppingCartIcon
              onClick={() => {
                setOpen(true);
              }}
              sx={{
                color: "white",
                marginTop: "0.3rem",
                fontSize: "2rem",
              }}
            ></ShoppingCartIcon>
          </li>
        ) : null}
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
      </Ul>
    </Nav>
  );
};
export default Navigation;
