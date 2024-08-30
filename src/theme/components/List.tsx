import { listAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    item: {
        fontFamily: 'Kumbh Sans, sans-serif',
        color     : 'gray.dark',
        textAlign : 'left',
        '&::marker': {
            color     : 'violet.medium',
            fontWeight: 'bold',
            fontSize  : '1em',
        }
    }
})

export default defineMultiStyleConfig({ baseStyle })
