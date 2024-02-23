import { GifGridItem } from "../../src/components/GifGridItem";
import { render, screen } from '@testing-library/react';

describe('Prueba <GifGridItem/>', () => {
    const title = 'Yoasobi';
    const url = 'https://yoasobi.com/';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByText(title).innerHTML).toBe(title);
    })
})