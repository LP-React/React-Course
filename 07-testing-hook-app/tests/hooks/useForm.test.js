import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Laysson',
        email: 'ljamirp30'
    }

    test('Debe retornar un objeto por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any(Function),
            onClear: expect.any(Function)
        })

    });

    test('Debe de cambiar el nombre del Formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newName = 'Jamir';
        const newEmail = 'sakusumi'

        act(() => {
            onInputChange({ target: { name: 'email', value: newEmail } });
            onInputChange({ target: { name: 'name', value: newName } });
        })

        expect(result.current.formState).toEqual({
            name: newName,
            email: newEmail
        })

    });

    test('Debe resetear el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onClear, onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: 'Pedro' } });
            onInputChange({ target: { name: 'email', value: 'asdf' } });
            onClear();
        })

        expect(result.current.formState).toEqual(initialForm);
    })
})