import { HStack, Image, useColorMode } from "@chakra-ui/react"
import styled from "styled-components"

const TB_Label = styled.label`
    position        : relative;
    display         : inline-block;
    width           : 48px;
    height          : 24px;
    border-radius   : 12px;
    background-color: #fff;
`

const TB_Input = styled.input`
    width  : 0;
    height : 0;
    opacity: 0;

    &:checked + .toggle-button__slider::before {
        transform: translate(25px, -50%);
    }
`

const TB_Span = styled.span`
    position: absolute;
    cursor  : pointer;
    top     : 0;
    left    : 0;
    bottom  : 0;
    right   : 0;

    &::before {
        position     : absolute;
        content      : '';
        width        : 14px;
        height       : 14px;
        border-radius: 50%;
        top          : 50%;
        transform    : translateY(-50%);
        left         : 4px;
        background   : #5964E0;
        transition   : 0.25s;
    }
`

export const ThemeToggleButton = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack spacing='1em'>
            <Image
                src = '/desktop/icon-sun.svg'
                alt = ''
                w   = '20px'
                h   = '20px'
            />
            <TB_Label className='toggle-button__container'>
                <TB_Input 
                    type      = 'checkbox'
                    className = 'toggle-button__input'
                    onChange  = {() => toggleColorMode()}
                    checked   = {colorMode === 'dark'}
                />
                <TB_Span className='toggle-button__slider' />
            </TB_Label>
            <Image
                src = '/desktop/icon-moon.svg'
                alt = ''
                w   = '16px'
                h   = '16px'
            />
        </HStack>
    )
}
