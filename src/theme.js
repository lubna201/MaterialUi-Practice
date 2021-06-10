import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white:'#fff'},
    type: "dark",
    primary: {
      main: "#926e6f",
      light: '#e28f77',
      dark: "#e28fff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f7a440",
      light: '#583d79',
      dark: "#583d75",
      contrastText: "#fff",
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'},
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',},
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff'},
    success: {
      light:' #81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'},
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100:' #d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'},
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled:'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      divider: 'rgba(255, 255, 255, 0.12)'},
    background: {
      paper: '#424242',
      default: '#303030',},
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity:' 0.08',
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: '0.16',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: '0.38',
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: '0.12',
      activatedOpacity: '0.24',},
  },
  shadows: [
    '0px 0px 6px 0px rgba(0,0,0,0.2)',
    '0px 10px 14px 1px rgba(0,0,0,0.14)',
    '0px 4px 18px 3px rgba(0,0,0,0.12)'
  ],
typography: {
  fontFamily: "Comic Sans MS",
  htmlFontSize: '16',
  fontSize: '14',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '700',
  h1: {
    fontFamily: "Roboto",
    fontWeight: '300',
    fontSize: "6rem",
    lineHeight: '1.167',
    letterSpacing: "-0.01562em",
  },
  h2: {
    fontFamily: "Helvetica",
    fontWeight: '300',
    fontSize: "3.75rem",
    lineHeight: '1.2',
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "3rem",
    lineHeight: '1.167',
    letterSpacing: "0em",
  },
  h4: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "2.125rem",
    lineHeight: '1.235',
    letterSpacing: "0.00735em",
  },
  h5: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "1.5rem",
    lineHeight: '1.334',
    letterSpacing: "0em",
  },
  h6: {
    fontFamily: "Roboto",
    fontWeight: '500',
    fontSize: "1.25rem",
    lineHeight: '1.6',
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontFamily: "Roboto", 
    fontWeight: '400',
    fontSize: "1rem",
    lineHeight: '1.75',
    letterSpacing: "0.00938em",
  },
  subtitle2:{
    fontFamily: "Roboto",
    fontWeight: '500',
    fontSize: "0.875rem",
    lineHeight: '1.57',
    letterSpacing: "0.00714em",
  },
  body1: {
    fontFamily: "Roboto", 
    fontWeight: '400',
    fontSize: "1rem",
    lineHeight: '1.5',
    letterSpacing: "0.00938em",
  },
  body2: {
    fontFamily: "Times New Roman",
    fontWeight: '400',
    fontSize: "0.875rem",
    lineHeight: '1.43',
    letterSpacing: "0.01071em"
  },
  button: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "0.75rem",
    lineHeight: '1.66',
    letterSpacing: "0.03333em",
  },
  overline: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: "0.75rem",
    lineHeight: '2.66',
    letterSpacing: "0.08333em",
    textTransform: "uppercase"},
},
shape: {
  borderRadius: 10
},
breakpoints: {
  values: {
    xs: 0,
      sm: 600,
        md: 960,
          lg: 1280,
            xl: 1920,
    },
},
direction: "ltr",
  mixins: {
  toolbar: {
    minHeight: 56,
      '@media(min - width: 0px) and(orientation: landscape)': {
      minHeight: 48
    },
    '@media(min - width: 600px)': {
      minHeight: 64
    }
  },
},
transitions: {
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  duration: {
    shortest: '150',
    shorter: '200',
    short: '250',
    standard: '300',
    complex: '375',
    enteringScreen: '225',
    leavingScreen: '195',
  },
},
zIndex: {
  mobileStepper: '1000',
  speedDial: '1050',
  appBar: '1100',
  drawer: '1200',
  modal: '1300',
  snackbar: '1400',
  tooltip: '1500',
},
})
