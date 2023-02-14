type IThemeContext = {
  theme: ITheme;
  UpdateTheme: (color: string) => void;
};

interface ITheme {
  name: string;
  color: IColor;
  font?: IFonts;
  anim?: IAnim;
}

interface IColor {
  main: string;
  secondary: string;
  accent: string;
}

interface IFonts {
  familly?: string;
  size?: string;
}

interface IAnim {
  slower?: string;
  slow?: string;
  normal?: string;
  fast?: string;
  instant?: string;
}
