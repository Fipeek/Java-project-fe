import styled from "styled-components";

export const StyledProduct = styled.div`
//   padding: 1rem;
  margin: 1rem 1rem;
  width: 500px;
    height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.primaryGrey};
  border-radius: 10px;
  position: relative;
  font-weight: 700;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.primaryGrey};
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  & > * {
    margin: 0 0.75rem;
  }
    & > div {

        margin: 0;
        position: absolute;
        top: 0;
        right: 10px;
    }
    transition: all 0.3s ease-in-out;
    &:hover {
    transform: scale(1.01);
    }
  & > h3 {
    margin-top: 0.7rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
  }
    & > p {
    margin-top: 0.7rem;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
`;
