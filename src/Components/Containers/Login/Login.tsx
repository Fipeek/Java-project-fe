import { useForm } from "react-hook-form";
import { LoginInputs } from "../../../config/types";
import { LoginForm, inputsx, labelsx } from "../Register/utils/utils";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { FormFields } from "../../../config/formFields";
import { ErrorSpan } from "../../../config/styles";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useCustomer } from "../../Hooks/useCustomer";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { loginMutation } = useCustomer();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit = (data: LoginInputs) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  const { customer } = useCustomer();
  console.log(customer);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
          variant="h5"
        >
          Login
        </Typography>
        <Box>
          <InputLabel sx={labelsx} htmlFor="username">
            {FormFields.USERNAME}
          </InputLabel>
          {errors.username && (
            <ErrorSpan>{`${FormFields.USERNAME} is required`}</ErrorSpan>
          )}
          <TextField
            sx={inputsx}
            variant="outlined"
            id="username"
            {...register("username", { required: true })}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="password">{FormFields.PASSWORD}</InputLabel>
          {errors.password && (
            <ErrorSpan>{`${FormFields.PASSWORD} is required`}</ErrorSpan>
          )}
          <TextField
            variant="outlined"
            id="password"
            type="password"
            sx={inputsx}
            {...register("password", { required: true })}
          />
        </Box>
        <SubmitButton text="Login" onClick={() => {}} />
      </Box>
    </LoginForm>
  );
};
export default Login;
