import { Box } from "@mui/material";
import Register from "../Register/Register";
import Login from "../Login/Login";

export const Authorization: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Login />
      <Register />
    </Box>
  );
};
