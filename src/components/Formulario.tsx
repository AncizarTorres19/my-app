
import { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {
    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target

    //     console.log(name);
    //     console.log(value);
    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     })
    // }

    const { email, nombre, edad, formulario, handleChange } = useForm<FormData>({
        email: 'Ancizar_19_99@gmail.com',
        nombre: 'Ancizar',
        edad: 22
    });
    return (
        <form autoComplete='off'>
            <div>
                <label className='form-label'>Email:</label>
                <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className='form-label'>Nombre:</label>
                <input
                    type='text'
                    className='form-control'
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className='form-label'>Edad:</label>
                <input
                    type='number'
                    className='form-control'
                    name='edad'
                    value={edad}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form >
    )
}
