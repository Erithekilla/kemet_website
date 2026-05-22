function Tarot(){
    return(
        <section className="page-content">
            <h1>Tarot</h1>
            <p>
                Espaco para arcanos, tiragens, correspondencias e interpretacoes. A pagina ja
                esta pronta para receber cartas, filtros e conteudo de estudo.
            </p>
            <div className="topic-grid">
                <article className="topic-card">
                    <h2>Arcanos</h2>
                    <p>Leitura simbolica dos arcanos maiores e menores em linguagem hermetica.</p>
                </article>
                <article className="topic-card">
                    <h2>Tiragens</h2>
                    <p>Estruturas de consulta para autoconhecimento, decisao e trabalho espiritual.</p>
                </article>
            </div>
        </section>
    )
}

export default Tarot
