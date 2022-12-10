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
                <time title="10 de dezembro às 14:22h" dateTime="2022-12-10 14:26:30">Publicadp há 1h</time> 
            </header>
            <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quae molestiae esse aperiam inventore error, id at blanditiis? Placeat exercitationem necessitatibus laborum! Cupiditate error animi eos quidem esse quisquam!👋</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quae molestiae esse aperiam inventore error, id at blanditiis? Placeat exercitationem necessitatibus laborum! Cupiditate error animi eos quidem esse quisquam!👋</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quae molestiae esse aperiam inventore error, id at blanditiis? Placeat exercitationem necessitatibus laborum! Cupiditate error animi eos quidem esse quisquam!👋</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quae molestiae esse aperiam inventore error, id at blanditiis? Placeat exercitationem necessitatibus laborum! Cupiditate error animi eos quidem esse quisquam!👋</p>
            </div>
        </article> 
    )
}