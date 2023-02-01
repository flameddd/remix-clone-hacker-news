import { style } from "@vanilla-extract/css";
import { vars } from './theme.css'

export const more = style({
  width: '100%',
  display: 'inline-block',
  color: vars.color.text1,
  ':visited': {
    color: vars.color.text3,
  },
})
