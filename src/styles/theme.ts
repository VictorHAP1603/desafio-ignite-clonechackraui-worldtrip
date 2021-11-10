import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "200": "rgba(153, 153, 153, 0.5);",
      "400": "#999999",
      "600": "#47585B",
    },
    yellow: {
      "800": "#FFBA08",
      "500": "rgba(255, 186, 8, 0.5);",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
});
