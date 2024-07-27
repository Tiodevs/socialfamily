// CSS
import styles from './CreatPost.module.css'

import { useState } from "react";
// import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from '../../hooks/useInsertDocument';

export default function () {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { insertDocument, response } = useInsertDocument("posts");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formError) return

        const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        if (!title || !body || !tags) {
            setFormError("Por favor prença todos os campos!")
        }

        insertDocument({
            title,
            body,
            tagArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        setTitle("")
        setBody("")
        setTags("")

        navigate("/")

    }

    return (
        <div className={styles.create_post}>
            <h1>Criar post</h1>

            <form onSubmit={handleSubmit} className={styles.form}>

                <input
                    type="text"
                    name="text"
                    required
                    placeholder="Titulo do post"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <textarea
                    name="body"
                    required
                    placeholder="Insira o conteúdo do post"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>

                <input
                    type="text"
                    name="tags"
                    required
                    placeholder="Insira as tags separadas por vírgula"
                    onChange={(e) => setTags(e.target.value)}
                    value={tags}
                />

                {!response.loading && <button className={styles.btn}>Criar post!</button>}
                {response.loading && (
                    <button className={styles.btn} disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    )
}