import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/characters/pages"

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <CharacterPage/>', () => {

        beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar a Rei y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=rei']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');

        expect(input.value).toBe('rei')

        const img = screen.getByRole('img');

        expect(img.src).toContain('/assets/characters/ev-rei.webp')

    })

    test('Debe de mostrar error cuando no se encuentra el personaje ("Laysson")', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=Laysson']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');

        expect(input.value).toBe('Laysson')

        const errorDiv = screen.getByLabelText('alert')

        expect(errorDiv).toBeTruthy()

        screen.debug()
    })



    test('Debe de llamar al Navigate al enviar el formulario', () => {

        const inputValue = 'Asuka'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {
            name: 'searchText',
            value: inputValue
        }})

        expect(input.value).toBe(inputValue)

        const form = screen.getByRole('form')
        fireEvent.submit(form)
        
        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
    })
})