import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.primaryWhite};
  border: none;
  padding: 0.5rem;\
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: bold;
  border-radius: 5px;
`;
