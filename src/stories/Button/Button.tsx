import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBackground};
  font-size: 1.05em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid ${(props) => props.theme.buttonBorderColor};
  border-radius: 3px;
  max-width: 15rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  cursor: pointer;
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeight};

  &:hover {
    transition: 0.5s;
    color: ${(props) => props.theme.hoverButtonColor};
    background-color: ${(props) => props.theme.hoverButtonBackground};
  }
`;

export const StyledButton = ({ children }: any) => {
  return <Button>{children}</Button>;
};
