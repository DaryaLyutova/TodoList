import styled from 'styled-components'
import systemCss from '@styled-system/css';
import { fontSize, FontSizeProps } from 'styled-system'

interface InputItemProps extends FontSizeProps { }

const inputItemCss = systemCss({
    width: 5,
    margin: 0,
    mb: 1,
    pr: 1,
    backgroundColor: `Azure`,
    borderRadius: 5,
    outline: `none`
});

const InputItem = styled.input<InputItemProps>`
border: 1px solid Azure;
${fontSize}
${inputItemCss}
&:hover {
        border: 1px solid green;
    }
`


export default InputItem;