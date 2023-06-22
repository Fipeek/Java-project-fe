import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productService";

export const useProduct = () => {
  const { data: products, isLoading } = useQuery(["products"], getProducts, {
    staleTime: 0,
    cacheTime: 0,
    initialData: [],
  });
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const addProductMutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
  const editProductMutation = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  return {
    addProductMutation,
    products,
    isLoading,
    deleteMutation,
    editProductMutation,
  };
};
