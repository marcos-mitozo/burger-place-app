"use client";

import { Root } from "@/app/Root";
import { LandingPage } from "@/app/LandingPage";
import { useAtom } from "jotai";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Ingredient from "./Ingredient";
import { theme } from "./ThemeAtom";

export default function MyApp() {
  const [appTheme]: any = useAtom(theme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "ingredient",
          element: <Ingredient />,
        },
      ],
    }
  ]);

  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
