import { Table } from "@/stories/Table/Table";
import React from "react";
import styled from "styled-components";
import { Input } from "../stories/Input/Input";
import { StyledButton } from "@/stories/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Span } from "@/stories/Text/span";

const Label = styled.label`
  color: ${(props) => props.theme.color};
`;

const FormContainer = styled.form`
  margin-top: 2vh;
  margin-bottom: 5vh;
`;

const FormFieldsWrapper = styled.form`
  display: flex;
  flex-direction: row;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IFields {
  name: string | undefined;
  quantity: number | undefined;
}

const Ingredient: React.FC = () => {
  const regs = [
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
    {
      id: 1,
      name: "Cheese",
    },
  ];

  const columns = ["Id", "Name"];

  const fields = ["id", "name"];

  const onSubmit: SubmitHandler<IFields> = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>();

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormFieldsWrapper>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <Span color={'red'}>This field is required</Span>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
            />
            {errors?.quantity?.type === "required" && (
              <Span color={'red'}>This field is required</Span>
              )}
          </FieldWrapper>
        </FormFieldsWrapper>
        <StyledButton>Save</StyledButton>
      </FormContainer>

      <Table columns={columns} rows={regs} fields={fields} />
    </div>
  );
};

export default Ingredient;
