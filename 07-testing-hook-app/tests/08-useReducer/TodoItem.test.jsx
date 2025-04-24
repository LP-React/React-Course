import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 6,
        description: "Hola mundo",
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToogleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el ToDo pendiente', () => {
        render(<TodoItem todo={todo} onCheckTodo={onToogleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    });

    test('debe de marcar el ToDo completado', () => {

        todo.done = true;
        render(<TodoItem todo={todo} onCheckTodo={onToogleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('el span debe llamar el toggleToDo', () => {

        render(<TodoItem todo={todo} onCheckTodo={onToogleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToogleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('el span eliminar el ToDO con onDeleteTodo', () => {

        render(<TodoItem todo={todo} onCheckTodo={onToogleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
        const deleteButton = screen.getByRole('button');

        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
})