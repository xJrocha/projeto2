import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import{ThumbsUp, Trash} from '@phosphor-icons/react'

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt='' />

            <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorandTime}>
                        <strong>Jheison Rocha</strong>
                        <time title="08 de dezembro ás 00:17h"  dateTime="2023-12-08 00:17:50">Cerca de 1 hora atrás</time>
                    </div>
                    <button onClick={handleDeleteComment}title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>

            </div>
           
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
         </div>
    </div>
    )
}