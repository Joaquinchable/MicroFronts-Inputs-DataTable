import "./App.css";
import Side from "./../Components/SideMenu";
import Header from "./../Components/Header";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import Employees from "../Pages/EmployeeForm/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#fafafa",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translate(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      root: {
        disableRipple: true,
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "220px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Side />
      <div className={classes.appMain}>
        <Header />

        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
