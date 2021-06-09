import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e28f83"
    },
    secondary: {
      main: "#583d72"
    }
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem"
    }
  },
  shape: {
    borderRadius: 10
  },
});