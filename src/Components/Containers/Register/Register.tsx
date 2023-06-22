import { useForm, SubmitHandler } from "react-hook-form";
import { useCustomer } from "../../Hooks/useCustomer";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { Form, inputsx, labelsx } from "./utils/utils";
import { ErrorSpan } from "../../../config/styles";
import { RegisterInputs } from "../../../config/types";
import { FormFields } from "../../../config/formFields";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const { registerMutation } = useCustomer();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    registerMutation.mutate({
      id: 0,
      username: data.username,
      email: data.email,
      password: data.password,
    });
    navigate("");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        sx={{
          margin: "1rem 0 0 0.75rem",
          color: "rgba(0, 0, 0, 0.6)",
        }}
        variant="h5"
      >
        Register
      </Typography>
      <Box>
        <InputLabel sx={labelsx} htmlFor="username">
          {FormFields.USERNAME}
        </InputLabel>
        {errors.username && (
          <ErrorSpan>{`${FormFields.USERNAME} is required`}</ErrorSpan>
        )}
        <TextField
          variant="outlined"
          id="username"
          sx={inputsx}
          {...register("username", { required: true })}
        />
      </Box>
      <Box>
        <InputLabel htmlFor="email">{FormFields.EMAIL}</InputLabel>
        {errors.email && (
          <ErrorSpan>{`${FormFields.EMAIL} is required`}</ErrorSpan>
        )}
        <TextField
          variant="outlined"
          id="email"
          type="email"
          sx={inputsx}
          {...register("email", { required: true })}
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
      <SubmitButton text="Register" onClick={() => {}} />
    </Form>
  );
};
export default Register;
