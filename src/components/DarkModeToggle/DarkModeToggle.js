"use client";

import React from "react";
import { Sun, Moon } from "react-feather";
import jsCookie from "js-cookie";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";
import VisuallyHidden from "../VisuallyHidden";

function DarkModeToggle({ initialTheme, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const ThemeIcon = theme === "light" ? Sun : Moon;

  function handleThemeChange() {
    const nextTheme = theme === "light" ? "dark" : "light";

    // Update state
    setTheme(nextTheme);

    // Set cookie to remember user preference
    jsCookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    // Update the colors on the root element
    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button {...delegated} onClick={handleThemeChange}>
      <ThemeIcon size="1.5rem" />
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkModeToggle;
