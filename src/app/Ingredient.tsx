import React from "react";
import { Input } from "../stories/Input/Input";
import styled from "styled-components";

const Ingredient: React.FC = () => {
  const Label = styled.label`
    color: ${(props) => props.theme.color};
  `;

  return (
    <div>
      <Label>
        Name
        <Input type="text" id="name" />
      </Label>
      <Label>
        Quantity
        <Input type="number" id="quantity" />
      </Label>
    </div>
  );
};

export default Ingredient;
