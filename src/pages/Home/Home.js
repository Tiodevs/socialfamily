// CSS
import styles from './Home.module.css'

import { useNavigate, Link } from "react-router-dom";

import CapaPost from '../../Components/CapaPost';

// react
import { useState } from "react";
import { useFetchDocuments } from '../../hooks/useFetchDocumensts';

export default function(){

    const { documents: posts, loading } = useFetchDocuments("posts");

    return(
        <div>
            <div className={styles.header}>
                <p>👋 Olá</p>
                <h1>Essa é a Social Family, um blog destinado a amantes de genecologia.</h1>
                <Link to="/posts/create">Ver os tutoriais</Link>
            </div>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts</p>
                        <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <div className={styles.posts}>
                        <CapaPost
                        infos= {post}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}