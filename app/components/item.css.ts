import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const moveCommentBtn = style({
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

export const comment = style({
  color: vars.color.text1,
});

export const hideComment = style({
  display: "none",
});

globalStyle(`${comment} a[href]`, {
  color: vars.color.text1,
  textDecoration: "underline",
});

export const tdIndent = style({
  width: "calc(var(--trIndentSpace) * 30px)",
  "@media": {
    "screen and (max-width: 750px)": {
      width: "calc(var(--trIndentSpace) * 4px)",
    },
    "screen and (max-width: 400px)": {
      width: "calc(var(--trIndentSpace) * 2px)",
    },
  },
});

export const contentWrap = style({
  overflowWrap: "anywhere",
  wordBreak: "break-word", // for MacOS/iOS safari
});
