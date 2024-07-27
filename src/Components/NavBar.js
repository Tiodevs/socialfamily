import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

// CSS
import styles from './Navbar.module.css'

export default function () {

    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>Social Family</NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/posts/create"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Criar post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Seu perfil
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>

            {user && (

                <button className={styles.entrar} onClick={logout}>
                    Sair
                </button>

            )}
            {!user && (

                <a className={styles.entrar}>
                    <NavLink
                        to="/login"

                    >
                        Entrar
                    </NavLink>
                </a>

            )}
        </nav>
    )
}