import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
    variants: {
        primary: defineStyle({
            bg: 'violet.medium',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontFamily: 'Kumbh Sans, sans-serif',
            fontSize: '1em',
            px: '2em',
            _hover: {
                bg: 'violet.light'
            }
        }),

        secondary: defineStyle({
            bg: 'violet.lightest',
            color: 'violet.medium',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontFamily: 'Kumbh Sans, sans-serif',
            fontSize: '1em',
            px: '2em',
            _hover: {
                bg: '#C5C9F4'
            }
        })
    }
})