// CSS
import { Link } from 'react-router-dom';
import styles from './CapaPost.module.css'

// Função para formatar a data
const formatDate = (seconds, nanoseconds) => {
    const date = new Date(seconds * 1000 + nanoseconds / 1000000); // Convertendo para milissegundos
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const TimestampComponent = ({ timestamp }) => {
    const { seconds, nanoseconds } = timestamp;
    const formattedDate = formatDate(seconds, nanoseconds);

    return (
        <div>
            <p className={styles.time}>{formattedDate}</p>
        </div>
    );
};

export default function ({ infos }) {
    return (
        <div className={styles.post}>
            <div className={styles.detalhes}>
                <p className={styles.tags}>Historia</p>
                <TimestampComponent timestamp={infos.createdAt} />
            </div>
            <div className={styles.infomacoes}>
                <Link to={`/posts/${infos.id}`}>
                    <h2>
                        {infos.title}
                    </h2>
                </Link>
                <p>{infos.body}</p>
            </div>
        </div>
    )
}