import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirsApp/>', () => {

    const title = 'Hola, soy Laysson';
    const subTitle = 'Soy un subtitulo'

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(
            <FirstApp title={title} />
        )
        expect(container).toMatchSnapshot()
    });
    test('Debe mostrar el mensaje "Hola,soy Laysson"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    });
    test('Debe mostrar el Subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(2)
    });
})