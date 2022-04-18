
import { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';

interface FormData {
    Telefono: number;
    Direccion: string;
    Rh: string;
}

export const Formulario2 = () => {

    const { Telefono, Direccion, Rh, formulario, handleChange } = useForm<FormData>({
        Telefono: 321985908,
        Direccion: 'calle 22 b sur',
        Rh: 'A+'
    });
    return (
        <form autoComplete='off'>
            <div>
                <label className='form-label'>Telefono:</label>
                <input
                    type='email'
                    className='form-control'
                    name='Telefono'
                    value={Telefono}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className='form-label'>Direccion:</label>
                <input
                    type='text'
                    className='form-control'
                    name='Direccion'
                    value={Direccion}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className='form-label'>Rh:</label>
                <input
                    type='text'
                    className='form-control'
                    name='Rh'
                    value={Rh}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form >
    )
}
