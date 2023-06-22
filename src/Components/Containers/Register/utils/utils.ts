import styled from "styled-components";

export const Form = styled.form`
  margin: 100px auto;
  width: 555px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  & > * {
    margin: 0.75rem;
  }
`;

export const LoginForm = styled.form`
  margin: 100px auto;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  & > * {
    margin: 1rem;
  }
`;
export const labelsx = {
  fontSize: "1rem",
};

export const inputsx = {
  width: "100%",
};
