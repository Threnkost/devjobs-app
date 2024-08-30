import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";
import colors from "./colors";
import Text from "./components/Text";
import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import List from "./components/List";

export const theme = extendTheme({
    colors,
    components: {
        Heading,
        Text,
        Button,
        Input,
        Checkbox,
        List
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
})