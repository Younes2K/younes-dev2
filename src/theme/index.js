// src/theme/index.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f9f6f3", // blanc cassé
        color: "#1a202c",
        fontFamily: "Arial, sans-serif",
        scrollBehavior: "smooth"
      }
    }
  },
  colors: {
    brand: {
      50: "#f9f6f3",
      100: "#ece6ff",
      200: "#cdbfff",
      300: "#b194ff",
      400: "#985eff",
      500: "#7c3aed",
      600: "#5b21b6",
      700: "#4c1d95",
      800: "#3b0764",
      900: "#240042"
    }
  }
})

export default theme
