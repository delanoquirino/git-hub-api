import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "white",
        lineHeight: "tall",
        bgGradient:
          "linear(to-r,rgba(250,109,201,1) 0%, rgba(254,172,122,1) 33%, rgba(216,44,73,1) 100%)",
      },
      fonts: {
        fontFamily: `'Popins', sans-serif`,
      },
    },
  },
});
