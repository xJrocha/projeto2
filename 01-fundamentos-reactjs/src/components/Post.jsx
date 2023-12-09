import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/xJrocha.png" />
                    <div className={styles.authorinfo}>
                    <strong>Jheison Rocha </strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="08 de dezembro ás 00:17h"  dateTime="2023-12-08 00:17:50">Publicado há 1h   </time>
         </header>

         <div className={styles.content}>
        
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href="">jane.design/doctorcare</a></p>

            <p> 
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>
             </p> 
            </div>
        
    </article>
    )
}