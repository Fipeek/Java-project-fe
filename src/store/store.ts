import { configureStore, createSlice } from "@reduxjs/toolkit";

type Customer = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type CustomerState = {
  customer: Customer;
};

const initialState: CustomerState = {
  customer: {
    id: 0,
    username: "",
    email: "",
    password: "",
  },
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
  },
});
const initialCartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { setCustomer } = customerSlice.actions;

const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCustomer = (state: RootState) => state.customer.customer;

export default store;
