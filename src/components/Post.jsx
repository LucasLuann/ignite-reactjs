import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/75109074?v=4" />
          <div className={styles.authorInfo}>
            <strong>Lucas Brito</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title="10 de dezembro às 14:22h" dateTime="2022-12-10 14:26:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Pessoal 👋</p>
        <p>Mais um projetinho subindo para o meu portfolio...</p>
        <p>
          <a href="#">lucas.brito@teste</a>
        </p>
        <p>
          <a href="#">#novoProjeto</a> <a href="#">#praCima</a>
          <a href="#">#neverStopLearning</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
