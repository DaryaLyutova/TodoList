import React from 'react';
import Box from './Box'
import Button from './Button'
import InputItem from './InputItem'
import closeButton from '../image/crossincircularbutton_80232.svg'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'
import { TodoType } from '../store/todo'

export const TodoItem = observer((props: TodoType) => {

    const [newTodo, setNewTodo] = React.useState<TodoType>({
        id: 0,
        task: '',
        description: '',
        date: new Date().toLocaleDateString()
    });

    const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'task':
                return setNewTodo({
                    ...newTodo,
                    task: e.target.value,
                    date: new Date().toLocaleDateString(),
                })
            case 'description':
                return setNewTodo({
                    ...newTodo,
                    description: e.target.value,
                    date: new Date().toLocaleDateString(),
                })
            default:
                console.log('Не соответствует ни одному из вариантов')
        }
    }

    const handlerChangeTodo = () => {
        todo.changeTodo(newTodo);
        setNewTodo({
            id: 0,
            task: '',
            description: '',
            date: new Date().toLocaleDateString()
        });
    }

    const handlerSubtite = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === `Enter`) {
            handlerChangeTodo();
        }
    }

    return (
        <Box
            justifyContent='space-between'
            flexDirection='row'
            width='100%'
            color='#000'
            padding={0}
            fontSize='task'
            borderBottom='1px solid green'
        >
            <Box
                pr={2}
                pl={2}
                justifyContent='space-between'
                flexDirection='row'
                width='100%'>
                <Box flexDirection='column'
                    alignItems='flex-start'>
                    <InputItem
                        name="task"
                        fontSize="task"
                        value={newTodo.task || props.task}
                        onFocus={() => { setNewTodo(props) }}
                        onChange={handlerChangeInput}
                        onBlur={handlerChangeTodo}
                        onSubmit={handlerSubtite} />
                    <InputItem
                        name="description"
                        fontSize="description"
                        onChange={handlerChangeInput}
                        onFocus={() => { setNewTodo(props) }}
                        onBlur={() => handlerChangeTodo()}
                        onSubmit={handlerSubtite}
                        value={newTodo.description || props.description} />
                    <InputItem as="p"
                        fontSize="date">
                        {props.date}</InputItem>
                </Box>
                <Button
                    type='button'
                    backgroundImage={`url(${closeButton})`}
                    backgroundSize="cover"
                    width={2}
                    height={2}
                    onClick={() => todo.removeTodo(props.id)} />
            </Box>
        </Box >)
})

export default TodoItem;