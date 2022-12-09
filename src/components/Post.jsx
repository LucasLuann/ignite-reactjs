export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/75109074?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Brito</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>
            </header>
        </article>
    )
}