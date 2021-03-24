import React from 'react'
import todo from '../store/todo'
import { TodoType } from '../store/todo'
import Box from './Box'
import Button from './Button'
import Input from './Input'

export const Form = () => {

    const [todoValue, setTodoValue] = React.useState<TodoType>({
        id: 0,
        task: '',
        description: '',
        date: new Date().toLocaleDateString()
    });

    const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'task':
                return setTodoValue({
                    ...todoValue,
                    id: todoValue.id + 1,
                    task: e.currentTarget.value,
                })
            case 'description':
                return setTodoValue({
                    ...todoValue,
                    description: e.currentTarget.value,
                })
            default:
                console.log('Не соответствует ни одному из вариантов')
        }
    }

    const handlersubmite = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoValue.task !== '' && todoValue.description !== '') {
            todo.addTodo(todoValue);
        }
        setTodoValue({
            ...todoValue,
            id: todoValue.id,
            task: '',
            description: '',
        });
    }

    return (
        <Box
            as="form"
            pr={2}
            pl={2}
            m={0}
            justifyContent='space-between'
            flexDirection='column'
            width={6}
            onSubmit={handlersubmite}>
            <Input
                placeholder="Задание"
                type="text"
                name="task"
                onChange={handlerChangeInput}
                value={todoValue.task}
                required />
            <Input
                placeholder="Описание"
                type="text"
                name="description"
                onChange={handlerChangeInput}
                value={todoValue.description}
                required />
            <Button
                type="submit"
                width={5}
                height={3}
                mt={2}
                color='white'
                fontSize='button'
                borderColor='green'
                borderRadius='10px'
                bg='green'
            >Создать</Button>
        </Box >
    )
}


export default Form;
