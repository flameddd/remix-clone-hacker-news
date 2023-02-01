import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const link1 = style({
  cursor: "pointer",
  color: vars.color.text3,
});

export const link2 = style([
  link1,
  {
    textDecoration: "underline!important",
  },
]);
