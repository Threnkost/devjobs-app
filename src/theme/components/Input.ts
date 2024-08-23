import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";


const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
    field: {
        fontFamily: 'Kumbh Sans, sans-serif',
        color: 'dark.blue',
        px: '2em',
        _placeholder: {
            color: 'gray.medium'
        }
    }
})

export default defineMultiStyleConfig({ 
    baseStyle
})
