import '@mui/material/styles';

declare module '@mui/material/styles' {

  interface Theme {
    border: string
  }

  interface ThemeOptions {
    border?: string
  }

  interface Palette {
    transparentGrey01?: string;
    transparentGrey02?: string;
    transparentGrey03?: string;
    starColor: string;
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
    transparentGrey01?: string;
    transparentGrey02?: string;
    transparentGrey03?: string;

    starColor?: string;
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


declare module '@mui/system/createTheme/shape' {
  interface Shape {
    borderRadiusScale: BorderRadius
  }
}


interface BorderRadius {
  md: number,
  lg: number,
  xl: number,
}