import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.primaryDarkBlue};
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    margin: 0 2rem;

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryWhite};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      font-weight: 700;
      transition: all 0.3s ease-in-out;
      &:hover {
        border: 2px solid white;
        padding: 0.5rem 1rem;
        border-radius: 30px;
        font-weight: 600;
      }
    }
  }
`;
