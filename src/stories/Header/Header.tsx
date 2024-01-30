"use client";

import React from "react";
import { StyledButton } from "../Button/Button";
import { PageTitle } from "../Text/PageTitle";
import { Span } from "../Text/span";
import { Switch } from "../Switch/Switch";
import "./header.css";
import { darkTheme, lightTheme } from "../../themes";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { theme } from "../../app/ThemeAtom";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const ThemeSwitchWrapper = styled.div`
  display: inline-flex;
`;

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const [appTheme, setAppTheme]: any = useAtom(theme);

  const handleChange = () => {
    setAppTheme(appTheme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
      <header style={{ backgroundColor: appTheme.bgColor, position: "absolute", minWidth: "100%", top: 0, left: 0, zIndex: 999  }}>
        <div></div>
        <div className="storybook-header">
          <div>
            <PageTitle>Burger Place</PageTitle>
          </div>
          <div>
            {user ? (
              <>
                <Span className="welcome">
                  Welcome, <b>{user.name}</b>!
                </Span>
                <StyledButton
                  size="small"
                  onClick={onLogout}
                  children="Log out"
                />
              </>
            ) : (
              <>
                <StyledButton
                  size="small"
                  onClick={onLogin}
                  children="Log in"
                />
                <StyledButton
                  primary
                  size="small"
                  onClick={onCreateAccount}
                  children="Sign up"
                />
              </>
            )}
            <ThemeSwitchWrapper>
              <FontAwesomeIcon
                icon={appTheme.title === "light" ? faSun : faMoon}
                style={{
                  marginTop: 7,
                  marginRight: 4,
                  color: appTheme.title === "light" ? "#000000" : "#FFD43B",
                }}
              />
              <Switch checked={appTheme.title === "dark" ? true : false} handleChange={handleChange} border />
            </ThemeSwitchWrapper>
          </div>
        </div>
      </header>
  );
};
