import { Box, InputLabel, TextField } from "@mui/material";
import { Product } from "../../config/types";
import { Form } from "./utils/utils";
import { FormFields } from "../../config/formFields";
import { ErrorSpan } from "../../config/styles";
import { labelsx, inputsx } from "../Containers/Register/utils/utils";
import { useForm } from "react-hook-form";
import SubmitButton from "../Containers/SubmitButton/SubmitButton";
import { useProduct } from "../Hooks/useProduct";

type Props = {
  productValues?: Product;
};

export const ProductForm: React.FC<Props> = (props) => {
  const { productValues } = props;

  const { addProductMutation, editProductMutation } = useProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: productValues,
  });

  const onSubmit = (data: Product) =>
    productValues
      ? editProductMutation.mutate(data)
      : addProductMutation.mutate(data);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onClick={(e: React.FormEvent) => {
        e.stopPropagation();
      }}
    >
      <Box>
        <InputLabel sx={labelsx} htmlFor="username">
          {FormFields.NAME}
        </InputLabel>
        {errors.name && (
          <ErrorSpan>{`${FormFields.NAME} is required`}</ErrorSpan>
        )}
        <TextField
          sx={inputsx}
          variant="outlined"
          id="username"
          {...register("name", { required: true })}
        />
      </Box>
      <Box>
        <InputLabel sx={labelsx} htmlFor="username">
          {FormFields.DESCRIPTION}
        </InputLabel>
        {errors.name && (
          <ErrorSpan>{`${FormFields.DESCRIPTION} is required`}</ErrorSpan>
        )}
        <TextField
          sx={inputsx}
          variant="outlined"
          id="username"
          {...register("description", { required: true })}
        />
      </Box>
      <Box>
        <InputLabel sx={labelsx} htmlFor="username">
          {FormFields.PRICE}
        </InputLabel>
        {errors.name && (
          <ErrorSpan>{`${FormFields.PRICE} is required`}</ErrorSpan>
        )}
        <TextField
          sx={inputsx}
          variant="outlined"
          id="username"
          type="number"
          {...register("price", { required: true, valueAsNumber: true })}
        />
      </Box>
      <SubmitButton
        onClick={() => {}}
        text={productValues ? "Edit" : "Submit"}
      />
    </Form>
  );
};

export default ProductForm;
