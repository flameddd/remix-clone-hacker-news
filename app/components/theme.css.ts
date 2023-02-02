import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    bg1: "#FF6600",
    bg2: "#F6F6EF",
    bg3: "#FFFFFF",

    text1: "#000000",
    text2: "#222222",
    text3: "#828282",
  },
});
