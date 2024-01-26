import React from "react";

import { Header } from "@/stories/Header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DrawerMenu } from "../stories/Drawer/DrawerMenu";
import GlobalStyle from "@/GlobalStyle";

export const Root: React.FC = () => {
  const Container = styled.div`
    display: inline;
    min-height: 100%;
    min-width: 100%;
    background-color: ${(props) =>
      props.theme.title === "light" ? "white" : "black"};
    position: absolute;
    right: 0;
    top: 0;
  `;

  const OutletWrapper = styled.div`
    width: 90%;
    height: 70vh;
    background-color: ${(props) => props.theme.bgColor};
    margin-left: 7%;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.69);
  `;

  return (
    <Container>
      <Header />
      <Container>
        <DrawerMenu />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Container>
      <GlobalStyle />
    </Container>
  );
};
