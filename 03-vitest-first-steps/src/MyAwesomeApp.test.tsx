import { describe, expect, test } from "vitest"
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp"

describe('MyAwesomeApp', () => {
    test('should render firstname and lastname', () => {
        const { container } = render(<MyAwesomeApp />);
        screen.debug();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Fernando');
    });

    test('should render firstname and lastname - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // })

        const h1 = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Fernando')

    })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)

        expect(container).toMatchSnapshot()
    })
})