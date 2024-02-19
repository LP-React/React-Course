import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Pruebas <CounterApp/>', () => {

    const valorInicial = 100;

    test('Deberia hacer match con la snapshot', () => {
        const { container } = render(<CounterApp value={valorInicial} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe empezar el contador con 100', () => {
        render(<CounterApp value={valorInicial} />);
        expect(screen.getByText(valorInicial).innerHTML).toContain('100');
    });

    test('Debe empezar el contador con 100', () => {
        render(<CounterApp value={valorInicial} />);
        expect(screen.getByText(valorInicial).innerHTML).toContain('100');
    });

    test('Debe incrementar el boton +1', () => {
        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByText('+ 1'));
        expect(screen.getByText(valorInicial + 1)).toBeTruthy();
    });

    test('Debe decrementar el boton -1', () => {
        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByText('- 1'));
        expect(screen.getByText(valorInicial - 1)).toBeTruthy();
    });

    test('Debe de funcionar el boton Reset', () => {
        render(<CounterApp value={valorInicial} />)
        for (let i = 0; i < 10; i++) {
            fireEvent.click(screen.getByText('+ 1'));
        }
        screen.debug();
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(valorInicial));
    })
})


