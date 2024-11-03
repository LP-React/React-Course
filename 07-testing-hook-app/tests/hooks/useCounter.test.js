import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(0);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('Debe de generar el counter con el valor 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    })

    test('Debe de incrementar el Counter', () => {

        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => {
            increment();
            increment();
        });

        expect(result.current.counter).toBe(2);
    })

    test('Debe de decrementar el Counter', () => {

        const { result } = renderHook(() => useCounter(7));
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement();
        });

        expect(result.current.counter).toBe(5);
    });

    test('Debe de realizar el Reset', () => {

        const { result } = renderHook(() => useCounter(7));
        const { reset, decrement } = result.current;

        act(() => {
            decrement();
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(7);
    })
});