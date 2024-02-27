import { GifGrid } from "../../src/components/GifGrid"
import { render, screen } from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('Debe mostrar el Loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    })
    test('Debe de mostrar los items cuando se cargan las imagenes de useFecthGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'AB22sC',
                title: 'Laysson',
                url: 'https://localhost/laysson.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)


        expect(screen.getAllByRole('img').length).toBe(2)
    })
})
