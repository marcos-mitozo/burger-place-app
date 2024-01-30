import React from "react";
import { Input } from "../stories/Input/Input";
import styled from "styled-components";
import { Table } from "@/stories/Table/Table";

const Ingredient: React.FC = () => {
  const Label = styled.label`
    color: ${(props) => props.theme.color};
  `;

  const regs = [
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
    {
      id: 1,
      name: 'Cheese'
    },
  ]

  const columns = [
    'Id', 'Name'
  ]

  const fields = ['id', 'name'];

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

      <Table columns={columns} rows={regs} fields={fields} />
    </div>
  );
};

export default Ingredient;
