import React, { ChangeEvent, useContext, useState } from "react";

import { StyledButton } from "../Button/Button";
import { PageTitle } from "../Text/PageTitle";
import { Span } from "../Text/span";
import { Switch } from "../Switch/Switch";
import "./header.css";
import { darkTheme, lightTheme } from "../../themes";
import styled, { ThemeProvider } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme]: any = useState(darkTheme);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  const ThemeSwitchWrapper = styled.div`
    display: inline-flex;
  `;

  return (
    <ThemeProvider theme={theme}>
      <header style={{ backgroundColor: theme.bgColor }}>
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
                icon={theme.title === "light" ? faSun : faMoon}
                style={{
                  marginTop: 7,
                  marginRight: 4,
                  color: theme.title === "light" ? "#000000" : "#FFD43B",
                }}
              />
              <Switch checked={checked} handleChange={handleChange} border />
            </ThemeSwitchWrapper>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
};
