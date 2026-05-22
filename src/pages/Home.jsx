import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.home}>
            <div className={styles.intro}>
                <span className={styles.eyebrow}>Erick</span>
                <h1>Tarot, Thelema e caminhos de Kemet</h1>
                <div className={styles.copy}>
                    <p>
                        Erick &mdash; um caminhante entre os pilares do Thelema, da Daemonolatria e do Kemetismo.
                        Minha jornada com o Tarot teve in&iacute;cio em 2024, e desde ent&atilde;o tenho me dedicado com rigor
                        e paix&atilde;o ao estudo de seus in&uacute;meros simbolismos, camadas herm&eacute;ticas e correspond&ecirc;ncias m&iacute;sticas.
                    </p>
                    <p>
                        Fui introduzido &agrave;s pr&aacute;ticas esot&eacute;ricas atrav&eacute;s da Daemonolatria, que me abriu as portas para
                        o Kemetismo &mdash; a venera&ccedil;&atilde;o sagrada dos Netjeru eg&iacute;pcios. Foi nesse encontro que encontrei
                        no Thelema a s&iacute;ntese que hoje define minha espiritualidade: a Lei do Thelema como express&atilde;o
                        m&aacute;xima da Vontade Verdadeira.
                    </p>
                    <p>
                        Cada tiragem que realizo &eacute; uma ponte entre o plano manifesto e as for&ccedil;as que operam al&eacute;m do v&eacute;u.
                        Trabalho com inten&ccedil;&atilde;o, &eacute;tica e uma profunda rever&ecirc;ncia pela sabedoria ancestral que atravessa os s&eacute;culos.
                    </p>
                </div>
            </div>

            <div className={styles.practiceHeader}>
                <span>Pr&aacute;ticas</span>
                <h2>&Aacute;rea de Atua&ccedil;&atilde;o</h2>
            </div>

            <div className={styles.practiceGrid}>
                <article className={styles.practiceCard}>
                    <span className={styles.cardMark}>I</span>
                    <h3>Rituais Daemonol&aacute;tricos</h3>
                    <p>
                        Pr&aacute;ticas rituais voltadas ao trabalho com os Daemons dentro de uma perspectiva sagrada,
                        respeitosa e estruturada &mdash; integrando a tradi&ccedil;&atilde;o daemonol&aacute;trica com a cosmologia kem&eacute;tica.
                    </p>
                </article>

                <article className={styles.practiceCard}>
                    <span className={styles.cardMark}>II</span>
                    <h3>Rituais Thel&ecirc;micos</h3>
                    <p>
                        Rituais baseados na tradi&ccedil;&atilde;o thel&ecirc;mica de Aleister Crowley &mdash; incluindo trabalhos m&aacute;gicos,
                        medita&ccedil;&otilde;es e pr&aacute;ticas de alinhamento com a Vontade Verdadeira (True Will) do consulente.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Home
