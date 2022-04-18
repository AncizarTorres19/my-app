import { useReducer } from "react";

const inicialState = {
    contador: 0
}

type ActionType =
    | { type: 'INCREMENTAR' }
    | { type: 'DECREMENTAR' }
    | { type: 'CUSTOM', payload: number };
const conatorReducer = (state: typeof inicialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'DECREMENTAR':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'CUSTOM':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state;
    }
}
export const ContadorRed = () => {

    const [{contador}, dispatch] = useReducer(conatorReducer, inicialState)

    return (
        <>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => dispatch({ type: 'INCREMENTAR' })}
                className='btn btn-outline-primary'
            >+1</button>
            <button
                onClick={() => dispatch({ type: 'DECREMENTAR' })}
                className='btn btn-outline-danger'
            >-1</button>
            <button
                onClick={() => dispatch({ type: 'CUSTOM', payload: 100 })}
                className='btn btn-outline-success'
            >100</button>
        </>
    )
}
