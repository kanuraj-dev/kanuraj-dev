/// <reference types="react-scripts" />

import theme from "constants/theme";
declare global {
  type Theme = typeof theme;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // adds the `mobile` breakpoint
  }
}
