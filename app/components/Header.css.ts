import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  backgroundColor: vars.color.bg1,
  padding: 2,
});

export const logoA = style({
  height: "100%",
  flex: 0,
  fontSize: 0,
});

export const logo = style({
  border: "1px white solid",
});

export const navs = style({
  display: "flex",
  flex: 1,
  flexWrap: "wrap",
});

export const linkIndex = style({
  fontWeight: "bold",
  color: vars.color.text1,
  flex: 0,
  whiteSpace: "nowrap",
  marginRight: 16,
});

export const links = style({
  flex: "0 1 auto",
  whiteSpace: "nowrap",
});

export const link = style({
  color: vars.color.text1,
});

export const activeStoryLink = style({
  color: "white",
});
