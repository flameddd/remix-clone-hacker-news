import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const vote = style({
  display: "inline-block",
  width: 16,
  height: 16,
  border: "0px",
  padding: "3px 2px 0",

  selectors: {
    '&[data-upvote="true"]': {
      // background: 'url("../../public/grayarrow.gif") no-repeat',
      background:
        "url('data:image/gif;base64,R0lGODlhCgAKALMJANPT06enp/b29r+/v52dnfn5+bq6usLCwpqamv///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAAAKAAoAAAQcMMlJq712GIzQDV1QFV0nUETZTYDaAdIhz3ISAQA7') no-repeat",

      backgroundPosition: "top",
      backgroundSize: 14,
      transform: "translateY(2px)",
    },
  },
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
  color: vars.color.text3,
  ":hover": {
    textDecoration: "underline",
  },
});

export const separator = style({
  display: "inline-block",
  height: 10,

  "@media": {
    "screen and (max-width: 480px)": {
      height: 6,
    },
  },
});
