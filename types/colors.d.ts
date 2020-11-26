declare module '@ugitech/web-template/lib/util/colors' {
  export const primary: string;
  export const secondary: string;
  export const accent: string;

  export const error: string;
  export const warning: string;
  export const success: string;
  export const info: string;

  interface ITheme {
    primary?: string;
    secondary?: string;
    accent?: string;
    error?: string;
    warning?: string;
    info?: string;
    success?: string;
  }
  const theme: {
    themes: {
      light?: ITheme,
      dark?: ITheme
    }
  }
  export default theme;
}
