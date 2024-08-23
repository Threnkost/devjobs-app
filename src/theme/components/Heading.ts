import { defineStyle } from "@chakra-ui/react";


export default defineStyle({
    baseStyle: {
        color     : 'dark.blue',
        fontWeight: 'bold',
        fontFamily: 'Kumbh Sans, sans-serif'
    },
    sizes: {
        xl: {
            fontSize  : '1.75em',
            lineHeight: '34px'
        },
        lg: {
            fontSize  : '1.5em',
            lineHeight: '29px'
        },
        md: {
            fontSize  : '1.25em',
            lineHeight: '24px'
        },
        sm: {
            fontSize  : '0.875em',
            lineHeight: '18px'
        }
    },
    defaultProps: {
        size: 'xl'
    }
})
