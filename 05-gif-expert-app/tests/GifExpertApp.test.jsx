import { GifExpertApp } from "../src/GifExpertApp"
import { fireEvent, render, screen } from '@testing-library/react'

describe('Pruebas en <GifExpertApp/>', () => {

    test('Debe agregar una nueva categoria en categories', () => {

        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy()

        const input = screen.getByRole('textbox')
        const inputValue = 'Goku';

        fireEvent.input(input, { target: { value: inputValue } })
        const form = screen.getByRole('form');
        fireEvent.submit(form)

        expect(screen.getByText(inputValue)).toBeTruthy()
    })

    test('Debe de rechazar si ya hay un categorie con ese nombre', () => {

        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy()

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form');
        const inputValue = 'Goku';

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(screen.getAllByText(inputValue).length).toBe(1)

        screen.debug();
    })
})