// CSS
import styles from './Login.module.css'

import { useAuthentication } from "../../hooks/useAuthentication.js";

import { useEffect, useState } from 'react'

export default function () {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")


        const user = {
            email,
            password
        }

        const res = await login(user);

        console.log(res);
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>

            <h1>
                Entrar na conta
            </h1>

            <form onSubmit={handleSubmit} className={styles.form}>

                <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email do usuário'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <input
                    type='password'
                    name='password'
                    required
                    placeholder='Senha do usuário'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />



                {!loading && <button className={styles.btn}>Entrar</button>}
                {loading && (
                    <button className={styles.btn} disabled>
                        Aguarde...
                    </button>
                )}

                {error && <p className='error'>{error}</p>}

                <p className={styles.cadastrar}>Não tem uma conta? <a href='/register'>Cadastrar-se</a></p>
            </form>
        </div>
    )
}