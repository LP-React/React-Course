import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirsApp/>', () => {
    // test('Debe de hacer match con el snapshot', () => { 
    //     const title = 'Laysson';
    //     const {container} = render(<FirstApp title={title}/>);

    //     expect(container).toMatchSnapshot();
    //  });
    test('Debe de mostrar el título en un h1', () => {
        const title = 'Laysson';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        // expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });
    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Soy un titulo';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render(<FirstApp
            title={title}
            subTitle={subtitle} />
        );
        expect(getAllByText(subtitle).length).toBe(2)
    })
})