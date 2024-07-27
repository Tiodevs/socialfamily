// CSS
import styles from './Footer.module.css'

export default function(){
    return(
        <footer className={styles.footer}>
            <div className={styles.linha}></div>
            <p className={styles.text}>Copyright 2024 - Felipe Pereira</p>
        </footer>
    )
}