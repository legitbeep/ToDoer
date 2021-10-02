import { createTheme } from "@mui/material";


// declare module for button for extra type in variants props :
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
} // check it for some reason not working

// for custom values in theme : 
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: boolean;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: boolean;
    };
  }
}

const theme = createTheme({
  status : { 
    danger:false 
  },
  palette: {
    primary: {
      main: "#3D087B",
    },
    secondary: {
      main: "#11052C",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 5,
  components : {
    MuiPaper :{
      styleOverrides : {
        root : {
          padding : "10px",
          boxShadow : "none",
          border : "1px solid grey",
        },
      },
    },
    MuiButton : {
      // style :
      styleOverrides : {
        root : {
          borderRadius : 5,
          padding : "8px 16px",
          backgroundColor : "#3D087B",
          color : "white",
          '&:hover' : {
            backgroundColor : "#3D087B",
            opacity: "0.8"
          }
        }
      },
      // default props for components :
      defaultProps : {
        disableRipple : true,
      },
      // variants - styles depending on supplied props :
      variants : [
        // {
        //   // for custom types use module augmentation
        //   props : { variant : "outlined" }, // must be from specified props from mui
        //   style : {},
        // }
      ]
    }
  },

});

export default theme;