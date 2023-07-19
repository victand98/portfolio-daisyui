"use client";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = (props) => {
  return <ThemeProvider defaultTheme="light">{props.children}</ThemeProvider>;
};
