import styled from "styled-components";

export const Span = styled.span`
    color: ${(props: any) => props.color || props.theme.color};
    font-size: ${(props: any) => props.size || "16px"}
  `;

