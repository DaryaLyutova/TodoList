import React from 'react';
import Box from './Box'
import TodoItem from './TodoItem'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'



export const ListItem = observer(() => {

    return (
        <Box as="ol"
            type="1"
            flexDirection='column'
            justifyContent='center'
            width={6}
            p={0}
        >
            {todo.todos.map((todo1) => {
                return (<TodoItem key={todo1.id} {...todo1} />)
            })}
        </Box>
    )
})

export default ListItem;