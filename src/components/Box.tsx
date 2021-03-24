import styled from 'styled-components'
import { flexbox, space, SpaceProps, FlexboxProps, layout, LayoutProps, color, ColorProps, fontSize, FontSizeProps, border, BorderProps } from 'styled-system'

interface BoxProps extends FlexboxProps, LayoutProps, SpaceProps, ColorProps, FontSizeProps, BorderProps { }

const Box = styled.div<BoxProps>`
    display:flex;
    align-items: center;
    ${color}
    ${flexbox}
    ${layout}
    ${space}
    ${fontSize}
    ${border}
`


export default Box;