// CSS
import CapaPost from "../Components/CapaPost";
import { useFetchDocument } from "../hooks/useFetchDocument";
import styles from "./Post.module.css";

// hooks

import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <div className={styles.posts}>
            <CapaPost
              infos={post}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Post;