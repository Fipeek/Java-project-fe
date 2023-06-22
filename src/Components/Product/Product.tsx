import React from "react";
import { Product } from "../../config/types";
import { StyledProduct } from "./utils/utils";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../Hooks/useProduct";
import { Backdrop } from "@mui/material";
import ProductForm from "../ProductForm/ProductForm";
import { useCustomer } from "../Hooks/useCustomer";
type Props = {
  product: Product;
};

export const SingleProduct: React.FC<Props> = ({ product }) => {
  const { deleteMutation } = useProduct();
  const [open, setOpen] = React.useState(false);
  const handleOpenEdit = () => {
    setOpen(true);
  };

  const { customer } = useCustomer();
  console.log(customer);
  const handleDelete = () => {
    deleteMutation.mutate(product.id);
  };

  return (
    <>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        onClick={() => setOpen(false)}
        open={open}
      >
        <ProductForm productValues={product} />
      </Backdrop>
      <StyledProduct>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}$</p>
        <div>
          <EditIcon
            onClick={handleOpenEdit}
            sx={{ color: "white", marginTop: "0.3rem", fontSize: "2rem" }}
          ></EditIcon>
          <DeleteIcon
            sx={{ color: "white", marginTop: "0.3rem", fontSize: "2rem" }}
            onClick={handleDelete}
          ></DeleteIcon>
        </div>
      </StyledProduct>
    </>
  );
};

export default SingleProduct;
