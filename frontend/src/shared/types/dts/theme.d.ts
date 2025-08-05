import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customStyles: {
      border: string;
    };
  }

  interface ThemeOptions {
    customStyles?: {
      border?: string;
    };
  }

  interface Palette {
    transparentGrey: string;
    gradientMidnightSpace: string;
    gradientGrey: string;
    gradientOrange: string;
    gradientGreen: string;
    gradientRed: string;
    gradientBlue: string;
    green: CustomColor;
    purple: CustomColor;
    orange: CustomColor;
    blue: CustomColor;
  }

  interface PaletteOptions {
    transparentGrey?: string;
    gradientMidnightSpace?: string;
    gradientGrey?: string;
    gradientOrange?: string;
    gradientGreen?: string;
    gradientRed?: string;
    gradientBlue?: string;
    green?: CustomColor;
    purple?: CustomColor;
    orange?: CustomColor;
    blue?: CustomColor;
  }

  interface CustomColor {
    light: string;
    dark: string;
    darkGradient: string;
    lightGradient: string;
  }
}
