import styles from './LiberResh.module.css'

function LiberResh(){
    return(
        <section className={styles.resh}>
            <header className={styles.hero}>
                <span>Liber Resh</span>
                <h1>Liber Resh vel Helios</h1>
                <p>
                    As adora&ccedil;&otilde;es solares de amanhecer, meio-dia, ocaso e meia-noite,
                    organizadas como uma pr&aacute;tica devocional para manter a consci&ecirc;ncia da Grande Obra.
                </p>
            </header>

            <div className={styles.adorations}>
                <article className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>1</span>
                        <div>
                            <h2>Amanhecer</h2>
                            <p>Leste &middot; R&aacute;</p>
                        </div>
                    </div>
                    <p>
                        Que ele sa&uacute;de o Sol ao amanhecer, de frente para o Leste, dando o sinal de seu grau<sup>3</sup>.
                        E que ele diga em voz alta:
                    </p>
                    <blockquote>
                        <p>
                            Salve a Ti que &eacute;s R&aacute; em Tua ascens&atilde;o, bem como a Ti que &eacute;s R&aacute; em Tua for&ccedil;a,
                            que viajas acima dos C&eacute;us em Tua barca no Levante do Sol.
                        </p>
                        <p>Tahuti permanece em Seu esplendor na proa, e Ra-Hoor continua no leme.</p>
                        <p>Salve a Ti das Moradas da Noite!</p>
                    </blockquote>
                </article>

                <article className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>2</span>
                        <div>
                            <h2>Meio-Dia</h2>
                            <p>Sul &middot; Ahathoor</p>
                        </div>
                    </div>
                    <p>
                        Tamb&eacute;m ao Meio-Dia, que ele sa&uacute;de o Sol, de frente para o Sul<sup>4</sup>, dando o sinal de seu grau.
                        E que ele diga em voz alta:
                    </p>
                    <blockquote>
                        <p>
                            Salve a Ti que &eacute;s Ahathoor em Teu triunfo, bem como a Ti que &eacute;s Ahathoor em Tua beleza,
                            que viajas acima dos C&eacute;us em Tua barca no Meio-curso do Sol.
                        </p>
                        <p>Tahuti permanece em Seu esplendor na proa, e Ra-Hoor continua no leme.</p>
                        <p>Salve a Ti das Moradas da Manh&atilde;!</p>
                    </blockquote>
                </article>

                <article className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>3</span>
                        <div>
                            <h2>Ocaso</h2>
                            <p>Oeste &middot; Tum</p>
                        </div>
                    </div>
                    <p>
                        Tamb&eacute;m ao Ocaso, que ele sa&uacute;de o Sol, de frente para o Oeste, dando o sinal de seu grau.
                        E que ele diga em voz alta:
                    </p>
                    <blockquote>
                        <p>
                            Salve a Ti que &eacute;s Tum em Teu poente, bem como a Ti que &eacute;s Tum em Tua alegria,
                            que viajas acima dos C&eacute;us em Tua barca na Descida do Sol.
                        </p>
                        <p>Tahuti permanece em Seu esplendor na proa, e Ra-Hoor continua no leme.</p>
                        <p>Salve a Ti das Moradas do Dia!</p>
                    </blockquote>
                </article>

                <article className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>4</span>
                        <div>
                            <h2>Meia-noite</h2>
                            <p>Norte &middot; Khephra</p>
                        </div>
                    </div>
                    <p>
                        Por fim &agrave; Meia-noite, que ele sa&uacute;de o Sol, de frente para o Norte, dando o sinal de seu grau.
                        E que ele diga em voz alta:
                    </p>
                    <blockquote>
                        <p>
                            Salve a Ti que &eacute;s Khephra em Teu ocultamento, bem como a Ti que &eacute;s Khephra em Teu sil&ecirc;ncio,
                            que viajas acima dos C&eacute;us em Tua barca &agrave; Hora da Meia-Noite do Sol.
                        </p>
                        <p>Tahuti permanece em Seu esplendor na proa, e Ra-Hoor continua no leme.</p>
                        <p>Salve a Ti das Moradas do Entardecer<sup>5</sup>!</p>
                    </blockquote>
                </article>
            </div>

            <section className={styles.instructions}>
                <h2>Instru&ccedil;&otilde;es</h2>
                <ol>
                    <li>
                        Depois de cada uma dessas invoca&ccedil;&otilde;es, tu dar&aacute;s o sinal do sil&ecirc;ncio,
                        e depois realizar&aacute;s a adora&ccedil;&atilde;o que te foi ensinada pelo teu Superior.
                        E ent&atilde;o aquieta-Te em santa medita&ccedil;&atilde;o.
                    </li>
                    <li>
                        Tamb&eacute;m &eacute; melhor se nessas adora&ccedil;&otilde;es tu assumires a forma do Deus a Quem tu adoras,
                        como se tu te unisses a Ele na adora&ccedil;&atilde;o Daquilo que est&aacute; al&eacute;m Dele.
                    </li>
                    <li>
                        Assim tu estar&aacute;s sempre atento &agrave; Grande Obra que tu juraste realizar, e assim tu ser&aacute;s fortalecido
                        para segui-la at&eacute; a conquista da Pedra dos S&aacute;bios, o Summum Bonum, a Verdadeira Sabedoria
                        e a Felicidade Perfeita.
                    </li>
                </ol>
            </section>
        </section>
    )
}

export default LiberResh
