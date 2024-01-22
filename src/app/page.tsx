"use client";
import { StyledButton } from "@/stories/Button/Button";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/themes";

export default function MyApp() {
  const theme: any = darkTheme

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{backgroundColor: theme.bgColor}}>
        <StyledButton>Test StyledButton</StyledButton>
      </div>
    </ThemeProvider>
  );
}
