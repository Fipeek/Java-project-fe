import { Box } from "@mui/material";
import ProductForm from "../../ProductForm/ProductForm";

export const Admin: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <ProductForm />
    </Box>
  );
};

export default Admin;
