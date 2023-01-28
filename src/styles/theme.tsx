import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "white",
        lineHeight: "tall",
        bg: "#353333",
      },
      fonts: {
        fontFamily: `'Popins', sans-serif`,
      },
    },
  },
});
