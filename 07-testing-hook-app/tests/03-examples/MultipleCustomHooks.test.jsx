import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples'
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 0,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));
        expect(screen.getByText('Next Quote'));

        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextQuoteButton.disabled).toBeTruthy();
    })

    test('Debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: { game_indices: [{ version: { name: 'Hola Mundo' } }], name: 'LAYSSON' },
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('LAYSSON')).toBeTruthy();

        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextQuoteButton.disabled).toBeFalsy();

    })

    test('Debe llamar la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: { game_indices: [{ version: { name: 'Hola Mundo' } }], name: 'LAYSSON' },
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)

        const nextQuoteButton = screen.getByRole('button', { name: 'Next Quote' });

        fireEvent.click(nextQuoteButton);

        expect(mockIncrement).toHaveBeenCalled();

    })
})