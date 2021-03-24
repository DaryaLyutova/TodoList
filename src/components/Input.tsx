import styled from 'styled-components'
import systemCss from '@styled-system/css';

const inputCss = systemCss({
    fontSize: `task`,
    borderColor: `green`,
    width: 5,
    height: 3,
    margin: 0,
    mt: 2,
    pr: 1,
    pl: 1,
    backgroundColor: `Azure`,
    borderRadius: 10,
    outline: `none`
});

const Input = styled.input`
${inputCss}
`


export default Input;