import { useDispatch, useSelector } from "react-redux";
import { selectCustomer, setCustomer } from "../../store/store";
import { Customer } from "../../config/types";
import { useMutation } from "react-query";
import { login, register } from "../../services/customerService";

export const useCustomer = () => {
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomer);
  const setCustomerHandler = (customer: Customer) => {
    dispatch(setCustomer(customer));
  };

  const isLoggedIn = customer.id !== 0;

  const registerMutation = useMutation(register);

  const loginMutation = useMutation(login, {
    onSuccess: (res) => {
      if (res.data)
        setCustomerHandler({
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          password: res.data.password,
        });
    },
  });

  return {
    customer,
    loginMutation,
    setCustomerHandler,
    isLoggedIn,
    registerMutation,
  };
};
