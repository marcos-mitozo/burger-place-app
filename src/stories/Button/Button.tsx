import React from "react";
import styled from "styled-components";

export const StyledButton = ({ children }: any) => {
  const Button = styled.button`
    color: ${(props) => props.theme.buttonColor};
    background-color: ${(props) => props.theme.buttonBackground};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid ${(props) => props.theme.buttonBorderColor};
    border-radius: 3px;
    max-width: 15rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    cursor: pointer;
    display: inline-block;

    &:hover {
      transition: .5s;
      color: ${(props) => props.theme.hoverButtonColor};
      background-color: ${(props) => props.theme.hoverButtonBackground};
    }
  `;

  return <Button>{children}</Button>;
};
