import { StyleConfig, extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";
import colors from "./colors";
import Text from "./components/Text";
import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";


export const theme: StyleConfig = extendTheme({
    colors,
    components: {
        Heading,
        Text,
        Button,
        Input,
        Checkbox
    }
})