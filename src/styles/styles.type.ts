declare module "@mui/material/styles" {
  interface TypographyVariants {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    "2xl": React.CSSProperties;
    "3xl": React.CSSProperties;
    "4xl": React.CSSProperties;
    "5xl": React.CSSProperties;
    "6xl": React.CSSProperties;
    "7xl": React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    "2xl": React.CSSProperties;
    "3xl": React.CSSProperties;
    "4xl": React.CSSProperties;
    "5xl": React.CSSProperties;
    "6xl": React.CSSProperties;
    "7xl": React.CSSProperties;
  }

  /*=============================================
    =            Breakpoints           =
    =============================================*/

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
    xxxxl: true;
  }

  /*=====  End of Breakpoints  ======*/

  /*=============================================
    =            Color pallets            =
    =============================================*/

  interface Palette {
    muted: Palette["primary"];
    background: Palette["background"];
    light: Palette["primary"];
  }

  interface PaletteOptions {
    muted?: PaletteOptions["primary"];
    background?: PaletteOptions["background"];
    light?: PaletteOptions["primary"];
  }

  /*=====  End of Color pallets  ======*/
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    "2xl": true;
    "3xl": true;
    "4xl": true;
    "5xl": true;
    "6xl": true;
    "7xl": true;
  }
}

export {};
