import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.tableBackground};
  border: 1px solid #ececec09;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.69);
  display: block;
  max-width: 100%;
  position: relative;
  border-spacing: 10px;
`;

export const Table: any = ({ columns, rows, fields }: any) => {
  return (
    <StyledTable>
      <Table.Head>
        <Table.TR>
          {columns.map((header: string) => (
            <Table.TH id={header}>{header}</Table.TH>
          ))}
        </Table.TR>
      </Table.Head>
      <Table.Body>
        {rows.map((row: any) => (
          <Table.TR id={row}>
            {fields.map((field: any) => (
              <Table.TD id={field}>{row[field]}</Table.TD>
            ))}
          </Table.TR>
        ))}
      </Table.Body>
    </StyledTable>
  );
};

const THead = styled.thead`
  color: ${(props) => props.theme.main};
  height: 50px;
  background-color: ${(props) => props.theme.theadBackground};
`;

const TFoot = styled.tfoot``;

const TBody = styled.tbody``;

const TR = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.tableBorderColor};
  width: 200px;
`;

const TH = styled.th`
  border-bottom: 1px solid ${(props) => props.theme.tableBorderColor};
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
`;

const TD = styled.td`
  height: 20px;
  border-bottom: 1px solid ${(props) => props.theme.tableBorderColor};
  padding: 10px;
  min-width: 10vw;
`;

Table.Head = ({ children, ...rest }: any) => {
  return <THead {...rest}>{children}</THead>;
};

Table.Body = ({ children, ...rest }: any) => {
  return <TBody {...rest}>{children}</TBody>;
};

Table.Foot = ({ children, ...rest }: any) => {
  return <TFoot {...rest}>{children}</TFoot>;
};

Table.TH = ({ children, ...rest }: any) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }: any) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }: any) => {
  return <TD {...rest}>{children}</TD>;
};
