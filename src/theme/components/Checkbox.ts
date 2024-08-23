import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'


const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)


const baseStyle = definePartsStyle({
    label: {
        fontFamily: 'Kumbh Sans, sans-serif',
        fontWeight: 'bold',
        fontSize  : '1em',
        marginLeft: '1em'
    },
    control: {
        width: '24px',
        height: '24px',
        borderRadius: '3px',
        border: 'none',
        background: '#E8E8EA',
        transition:'100ms ease-out',
        _hover: {
            background: '#D5D8F7'
        },
        _checked: {
            background: 'violet.medium'
        }
    }
})

export default defineMultiStyleConfig({ baseStyle })