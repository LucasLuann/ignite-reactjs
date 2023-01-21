import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ autor, dataPublicacao, content }) {
  const dataPublicacaoFormatada = format(
    dataPublicacao,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr },
  );

  const dataPublicacaoRelativaAtual = formatDistanceToNow(dataPublicacao, {
    locale: ptBr,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={autor.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{autor.nome}</strong>
            <span>{autor.cargo}</span>
          </div>
        </div>
        <time
          title={dataPublicacaoFormatada}
          dateTime={dataPublicacao.toISOString()}
        >
          {dataPublicacaoRelativaAtual}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragrafo') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
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
