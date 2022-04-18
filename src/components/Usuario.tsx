
import { useState } from 'react'

interface User {
    uid: string;
    name: string;
}
export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const Login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Ancizar Torres'
        });
    }

    return (
        <div className='mt-5'>
            <h3>Usuario: useState</h3>
            <br />
            <button
                onClick={Login}
                className='btn btn-outline-primary'
            >Login</button>
            {
                (!user)

                    ? <pre>No Hay Usuario</pre>

                    : <pre>{JSON.stringify(user)}</pre>
            }
        </div >
    )
}
