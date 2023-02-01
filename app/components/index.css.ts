import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html", {
  fontSize: "16px",
  fontFamily: "Verdana, Geneva, sans-serif",

  // prevent iOS safari change font size when orientation change
  "-webkit-text-size-adjust": "100%",
});

globalStyle("body", {
  margin: 8,
  display: "flex",
  justifyContent: "center",

  "@media": {
    "screen and (max-width: 750px)": {
      margin: 0,
    },
  },
});

globalStyle("a:link", {
  color: vars.color.text1,
  textDecoration: "none",
});

globalStyle("pre", {
  overflow: "auto",
  padding: 2,
  whiteSpace: "pre-wrap",
  overflowWrap: "anywhere",
});

export const root = style({
  width: "85%",
  minHeight: "350px",
  backgroundColor: vars.color.bg2,
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 750px)": {
      width: "100%",
    },
  },
});

export const table = style({
  paddingTop: 10,
  paddingRight: 16,
  paddingLeft: 6,
  backgroundColor: vars.color.bg2,
  color: vars.color.text3,
});

export const storyHint = style({
  margin: "6px 0 14px",
});

export const commonlink2 = style({
  color: vars.color.text1,
  ":visited": {
    color: vars.color.text3,
  },
});
