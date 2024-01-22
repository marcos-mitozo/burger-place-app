import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledSwitch = styled.div`
  position: relative;
  width: 50px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 20px;
  padding: 4px;
  transition: 0.5s;
  left: 4px;
  box-shadow: #00000064 5px 5px 2px;

  &:before {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    top: 50%;
    background: white;
    transform: translate(0, -50%);
    transition: 0.2s;
    left: 3px;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${StyledSwitch} {
    background: #fd9533;
    transition: 0.5s;

    &:before {
      transform: translate(24px, -50%);
    }
  }
`;

export const Switch = (props: any) => {

  return (
    <Label>
      <Input checked={props.checked} type="checkbox" onChange={props.handleChange} />
      <StyledSwitch />
    </Label>
  );
};
