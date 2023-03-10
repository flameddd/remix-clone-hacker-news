import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const vote = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: 16,
  border: 0,
  padding: "0 4px",

  "@media": {
    "screen and (max-width: 750px)": {
      width: 12,
      padding: "0 3px",
    },
  },
});

globalStyle(`${vote} > a`, {
  color: `${vars.color.text3}!important`,
});

export const upVote = style({
  display: "block",
  height: "100%",
});

export const title = style({
  color: vars.color.text1,
});

export const subTitle = style({
  "@media": {
    "screen and (max-width: 480px)": {
      fontSize: "0.8rem",
    },
  },
});

export const domain = style({
  color: vars.color.text3,
  fontSize: "0.8rem",
  marginLeft: 6,
});

export const commonlink = style({
  color: `${vars.color.text3}!important`,
  ":hover": {
    textDecoration: "underline",
  },
});

export const separator = style({
  height: 10,

  "@media": {
    "screen and (max-width: 480px)": {
      height: 6,
    },
  },
});
