// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
    config,
    styles: {
        global: (props) => ({
            body: {
                backgroundColor: mode("#FFFFFF", "#0F0F0F")(props),
                color: mode("gray.900", "gray.50")(props),
            },
        }),
    },
    colors: {
        darkmode: {
            bg: "#0F0F0F",
            color: "#E8EAEC",
            footer: "#ced4da9a",
        },
        lightmode: {
            bg: "#FFFFFF",
            color: "#1B1642",
            footer: "#222222",
        },
        myblack: {
            100: "#282828",
            200: "#24292e",
        },
    },
});

export default theme;

export const lightMode = {
    bg: "#FFFFFF",
    color: "#1B1642",
    footerColor: "#575A7B",
    highlight: "#01bda1",
    badge: "#c1eadf",
};
export const darkMode = {
    bg: "#0F0F0F",
    color: "#E8EAEC",
    footerColor: "#ced4da9a",
    highlight: "#ef5a9a",
    badge: "#FC719F",
};
