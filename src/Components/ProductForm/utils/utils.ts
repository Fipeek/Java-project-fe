import styled from "styled-components";

export const Form = styled.form`
  margin: 100px auto;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: 100;
  & > * {
    margin: 1rem;
  }
`;
