import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid ${(props) => props.theme.color};
  height: 30px;
  font-size: medium;
  padding: 4px;
  border-radius: 3px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.inputBackground};
  &:focus {
    outline: none;
    border: 2px solid #fd9533;
  }
`;

export const Input:React.FC = (props: any) => {
  return <StyledInput {...props} />
}