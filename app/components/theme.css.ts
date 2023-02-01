import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    "bg1": "#FF6600",
    "bg2": "#F6F6EF",
    "bg3": "#FFFFFF",

    "text1": "#000000",
    "text2": "#222222",
    "text3": "#828282",
  },
  
});

// bg
// #FFFFFF  3
// #F6F6EF  2
// #FF6600  1

// text color
// #828282  3
// #222222  2
// #000000  1

// border color
// #FFFFFF  2
// #767676  1