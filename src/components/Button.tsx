import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, color, ColorProps, fontSize, FontSizeProps, border, BorderProps, background, BackgroundProps } from 'styled-system'

interface ButtonProps extends LayoutProps, SpaceProps, ColorProps, FontSizeProps, BorderProps, BackgroundProps { }

const Button = styled.button<ButtonProps>`
    border: none;
    background-color: initial;
    padding: 0;
    margin: 0;
    outline: none;
    color: inherit;
    ${color}
    ${layout}
    ${space}
    ${fontSize}
    ${border}
    ${background}
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`


export default Button;