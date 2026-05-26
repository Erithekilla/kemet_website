import { useState } from 'react'
import styles from './Kaballah.module.css'

const notInPdf = 'Nao informado no PDF'

const sephiroth = [
    {
        id: 'kether',
        name: 'Kether',
        number: '1',
        x: 50,
        y: 7,
        title: 'Coroa',
        planet: 'Primum Mobile / Divino',
        archAngel: 'Metatron',
        archDemon: 'Satan & Moloch',
        qliphot: 'Thaumiel',
        text: 'Representa a unidade absoluta, a origem da criacao, consciencia divina pura e o principio primordial.',
        shadowText: 'Relacionada a divisao da unidade, dualidade absoluta, oposicao ao divino e poder separado da origem.'
    },
    {
        id: 'chokmah',
        name: 'Chokmah',
        number: '2',
        x: 78,
        y: 18,
        title: 'Sabedoria',
        planet: 'Esfera das Estrelas Fixas',
        archAngel: 'Raziel',
        archDemon: 'Beelzebub',
        qliphot: 'Ghagiel',
        text: 'Representa a forca criativa primordial, impulso puro, sabedoria divina e energia masculina arquetipica.',
        shadowText: 'Relacionada ao caos sem forma, forca sem direcao e desequilibrio do poder criativo.'
    },
    {
        id: 'binah',
        name: 'Binah',
        number: '3',
        x: 22,
        y: 18,
        title: 'Compreensao',
        planet: 'Saturno',
        archAngel: 'Tzaphkiel',
        archDemon: 'Lucifuge Rofocale',
        qliphot: 'Satariel',
        text: 'Representa entendimento profundo, estrutura, silencio, limitacao e a Grande Mae.',
        shadowText: 'Relacionada ao isolamento absoluto, pessimismo, rigidez extrema e ocultacao da verdade.'
    },
    {
        id: 'chesed',
        name: 'Chesed',
        number: '4',
        x: 76,
        y: 36,
        title: 'Misericordia',
        planet: 'Jupiter',
        archAngel: 'Tzadkiel',
        archDemon: 'Astaroth',
        qliphot: 'Gamchicoth',
        text: 'Representa expansao, benevolencia, autoridade equilibrada, compaixao e ordem.',
        shadowText: 'Relacionada ao excesso de indulgencia, tirania mascarada de bondade, orgulho e corrupcao moral.'
    },
    {
        id: 'geburah',
        name: 'Geburah',
        number: '5',
        x: 24,
        y: 36,
        title: 'Forca / Severidade',
        planet: 'Marte',
        archAngel: 'Kamael',
        archDemon: 'Asmodeus',
        qliphot: 'Golachab',
        text: 'Representa disciplina, justica, forca, coragem e destruicao necessaria para transformacao.',
        shadowText: 'Relacionada a violencia, crueldade, destruicao descontrolada, ira e abuso de poder.'
    },
    {
        id: 'tiphareth',
        name: 'Tiphareth',
        number: '6',
        x: 50,
        y: 49,
        title: 'Beleza',
        planet: 'Sol',
        archAngel: 'Raphael',
        archDemon: 'Belphegor',
        qliphot: 'Thagirion',
        text: 'Centro de equilibrio da Arvore da Vida. Representa harmonia, consciencia superior, sacrificio e integracao entre o humano e o divino.',
        shadowText: 'Relacionada ao falso ego espiritual, orgulho, vaidade espiritual e falsa iluminacao.'
    },
    {
        id: 'netzach',
        name: 'Netzach',
        number: '7',
        x: 76,
        y: 63,
        title: 'Vitoria',
        planet: 'Venus',
        archAngel: 'Haniel',
        archDemon: 'Baal',
        qliphot: "A'arab Zaraq",
        text: 'Manifestacao do desejo, da emocao, da arte, do prazer e da paixao. Representa a vitoria atraves da persistencia e da forca emocional.',
        shadowText: 'Relacionada ao excesso emocional, luxuria, impulsividade, ilusoes passionais e apego aos prazeres sensoriais.'
    },
    {
        id: 'hod',
        name: 'Hod',
        number: '8',
        x: 24,
        y: 63,
        title: 'Esplendor',
        planet: 'Mercurio',
        archAngel: 'Mikael',
        archDemon: 'Adramelekh',
        qliphot: 'Samael',
        text: 'Manifestacao da inteligencia no plano material. O PDF tambem alerta para o excesso de conhecimento disperso quando a inteligencia nao se torna sabedoria util.',
        shadowText: 'Relacionada a distorcao da mente, ilusao intelectual e conhecimento que nao se converte em transformacao.'
    },
    {
        id: 'yesod',
        name: 'Yesod',
        number: '9',
        x: 50,
        y: 76,
        title: 'Fundamento',
        planet: 'Lua',
        archAngel: 'Gabriel',
        archDemon: 'Lilith',
        qliphot: 'Gamaliel',
        text: 'Manifestacao astral e fundamento das formas que virao a existir. Relaciona-se ao autoconhecimento, ao plano astral e as imagens internas que antecedem a materia.',
        shadowText: 'Relacionada aos vicios de imagem, dependencia, fantasia descontrolada e bloqueios no verdadeiro autoconhecimento.'
    },
    {
        id: 'malkuth',
        name: 'Malkuth',
        number: '10',
        x: 50,
        y: 91,
        title: 'Reino',
        planet: 'Terra',
        archAngel: 'Sandalphon',
        archDemon: 'Naamah',
        qliphot: 'Lilith',
        text: 'Manifestacao material e juncao dos quatro elementos. No PDF, Malkuth e o territorio do corpo, dos vicios, dos desejos e do trabalho direto com a materia.',
        shadowText: 'Relacionada ao apego material, compulsao sensorial, vicios e prisao da consciencia na materia.'
    }
]

const paths = [
    { id: 'aleph', from: 'kether', to: 'chokmah', pathNumber: '11', letter: 'Aleph', transliteration: 'A', spelling: 'ALP', numerology: '111', meaning: 'Boi / criacao', tarot: 'O Louco', astrology: 'Elemento Ar', number: '1' },
    { id: 'beth', from: 'kether', to: 'binah', pathNumber: '12', letter: 'Beth', transliteration: 'B', spelling: 'BYTh', numerology: '412', meaning: 'Casa / fundamento / universo / atomo', tarot: 'O Magico', astrology: 'Mercurio', number: '2' },
    { id: 'gimel', from: 'kether', to: 'tiphareth', pathNumber: '13', letter: 'Gimel', transliteration: 'G', spelling: 'GML', numerology: '73', meaning: 'Camelo; travessia do Abismo', tarot: 'A Sacerdotisa', astrology: 'Lua', number: '3' },
    { id: 'daleth', from: 'chokmah', to: 'binah', pathNumber: '14', letter: 'Daleth', transliteration: 'D', spelling: 'DLTh', numerology: '434', meaning: 'Porta / utero', tarot: 'A Imperatriz', astrology: 'Venus', number: '4' },
    { id: 'heh', from: 'chokmah', to: 'tiphareth', pathNumber: '15', letter: 'Heh', transliteration: 'H / E', spelling: 'HH', numerology: '10', meaning: 'Janela', tarot: 'O Imperador', astrology: 'Aries', number: '5' },
    { id: 'vau', from: 'chokmah', to: 'chesed', pathNumber: '16', letter: 'Vau', transliteration: 'V / W / U / O', spelling: 'VV', numerology: '12', meaning: 'Unha / garras', tarot: 'O Hierofante', astrology: 'Touro', number: '6' },
    { id: 'zain', from: 'binah', to: 'tiphareth', pathNumber: '17', letter: 'Zain', transliteration: 'Z', spelling: 'ZYN', numerology: '67 / 717', meaning: 'Espada', tarot: 'Os Enamorados', astrology: 'Gemeos', number: '7' },
    { id: 'cheth', from: 'binah', to: 'geburah', pathNumber: '18', letter: 'Cheth', transliteration: 'CH', spelling: 'ChYTh', numerology: '418', meaning: 'Cerca / protecao / forca vital', tarot: 'A Carroca', astrology: 'Cancer', number: '8' },
    { id: 'teth', from: 'chesed', to: 'geburah', pathNumber: '19', letter: 'Teth', transliteration: 'T', spelling: 'TYTh', numerology: '419', meaning: 'Serpente / espinha / forca da serpente', tarot: 'A Forca', astrology: 'Leao', number: '9' },
    { id: 'yod', from: 'chesed', to: 'tiphareth', pathNumber: '20', letter: 'Yod', transliteration: 'Y / I / J', spelling: 'YVD', numerology: '20', meaning: 'Mao / energia criativa', tarot: 'O Eremita', astrology: 'Virgem', number: '10' },
    { id: 'kaph', from: 'chesed', to: 'netzach', pathNumber: '21', letter: 'Kaph', transliteration: 'K', spelling: 'KP', numerology: '100', meaning: 'Palma', tarot: 'Roda da Fortuna', astrology: 'Jupiter', number: '20-500' },
    { id: 'lamed', from: 'geburah', to: 'tiphareth', pathNumber: '22', letter: 'Lamed', transliteration: 'L', spelling: 'LMD', numerology: '74', meaning: 'Aguilhao / ensino / disciplina', tarot: 'A Justica', astrology: 'Libra', number: '30' },
    { id: 'mem', from: 'geburah', to: 'hod', pathNumber: '23', letter: 'Mem', transliteration: 'M', spelling: 'MYM', numerology: '90', meaning: 'Agua; liquido da vida', tarot: 'O Enforcado', astrology: 'Elemento Agua', number: '40-600' },
    { id: 'nun', from: 'tiphareth', to: 'netzach', pathNumber: '24', letter: 'Nun', transliteration: 'N', spelling: 'NVN', numerology: '106', meaning: 'Peixe / fecundidade / regeneracao', tarot: 'A Morte', astrology: 'Escorpiao', number: '50-700' },
    { id: 'samekh', from: 'tiphareth', to: 'yesod', pathNumber: '25', letter: 'Samekh', transliteration: 'S', spelling: 'SMK', numerology: '120 / 600', meaning: 'Suporte / circulo / ceus / utero', tarot: 'A Temperanca', astrology: 'Sagitario', number: '60' },
    { id: 'ayin', from: 'tiphareth', to: 'hod', pathNumber: '26', letter: 'Ayin', transliteration: 'Ay / Au / O / Ng', spelling: 'AYN', numerology: '130 / 780', meaning: 'Olho / origem / fonte', tarot: 'O Diabo', astrology: 'Capricornio', number: '70' },
    { id: 'peh', from: 'netzach', to: 'hod', pathNumber: '27', letter: 'Peh', transliteration: 'P / Ph / F', spelling: 'PH', numerology: '85', meaning: 'Boca / fala', tarot: 'A Torre', astrology: 'Marte', number: '80' },
    { id: 'tzaddi', from: 'netzach', to: 'yesod', pathNumber: '28', letter: 'Tzaddi', transliteration: 'Tz / X', spelling: 'TzDY', numerology: '104', meaning: 'Anzol / caca / captura / adversario', tarot: 'A Estrela', astrology: 'Aquario', number: '90-900' },
    { id: 'qoph', from: 'netzach', to: 'malkuth', pathNumber: '29', letter: 'Qoph', transliteration: 'Q', spelling: 'QVP', numerology: '186 / 906', meaning: 'Nuca / sono / inconsciente', tarot: 'A Lua', astrology: 'Peixes', number: '100' },
    { id: 'resh', from: 'hod', to: 'yesod', pathNumber: '30', letter: 'Resh', transliteration: 'R', spelling: 'RYSh', numerology: '510', meaning: 'Cabeca', tarot: 'O Sol', astrology: 'Sol', number: notInPdf },
    { id: 'shin', from: 'hod', to: 'malkuth', pathNumber: '31', letter: 'Shin', transliteration: 'Sh', spelling: 'ShYN', numerology: '360 / 1010', meaning: 'Dente', tarot: 'O Julgamento', astrology: 'Elemento Fogo / Espirito', number: notInPdf },
    { id: 'tau', from: 'yesod', to: 'malkuth', pathNumber: '32', letter: 'Tau', transliteration: 'Th / T', spelling: 'ThV', numerology: '406', meaning: 'Marca / cruz', tarot: 'O Mundo', astrology: 'Elemento Terra', number: notInPdf }
]

const findSephira = (id) => sephiroth.find((item) => item.id === id)

function Kaballah(){
    const [activeId, setActiveId] = useState('tiphareth')
    const active = findSephira(activeId)
    const connectedPaths = paths.filter((path) => path.from === activeId || path.to === activeId)

    const getConnection = (path) => `${findSephira(path.from).name} - ${findSephira(path.to).name}`

    return(
        <section className={styles.kaballah}>
            <header className={styles.hero}>
                <span>Qaballah</span>
                <h1>Arvore da Vida</h1>
                <p>
                    Clique em uma Sephira para revelar os dados qabalisticos do PDF, incluindo Arch-Angel,
                    Arch-Daemon, Qliphot, caminhos, letras, Tarot e correspondencias astrologicas.
                </p>
            </header>

            <div className={styles.treePanel}>
                <div className={styles.tree} aria-label="Arvore da Vida interativa">
                    <svg className={styles.paths} viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="kaballahActivePath" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#ff244f" />
                                <stop offset="48%" stopColor="#ffc84d" />
                                <stop offset="100%" stopColor="#22f2dc" />
                            </linearGradient>
                        </defs>
                        {paths.map((path) => {
                            const start = findSephira(path.from)
                            const end = findSephira(path.to)
                            const isActive = path.from === activeId || path.to === activeId

                            return (
                                <line
                                    key={path.id}
                                    x1={start.x}
                                    y1={start.y}
                                    x2={end.x}
                                    y2={end.y}
                                    className={isActive ? styles.activePath : styles.path}
                                />
                            )
                        })}
                    </svg>

                    {sephiroth.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`${styles.sephira} ${activeId === item.id ? styles.activeSephira : ''}`}
                            style={{ '--x': `${item.x}%`, '--y': `${item.y}%` }}
                            onClick={() => setActiveId(item.id)}
                            aria-pressed={activeId === item.id}
                        >
                            <span className={styles.number}>{item.number}</span>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>

                <article className={styles.infoCard}>
                    <span className={styles.infoNumber}>{active.number}</span>
                    <h2>{active.name}</h2>
                    <h3>{active.title}</h3>
                    <dl className={styles.metaGrid}>
                        <div>
                            <dt>Esfera</dt>
                            <dd>{active.planet}</dd>
                        </div>
                        <div>
                            <dt>Arch-Angel</dt>
                            <dd>{active.archAngel}</dd>
                        </div>
                        <div>
                            <dt>Arch-Daemon</dt>
                            <dd>{active.archDemon}</dd>
                        </div>
                        <div>
                            <dt>Qliphot</dt>
                            <dd>{active.qliphot}</dd>
                        </div>
                    </dl>
                    <p>{active.text}</p>
                    <p className={styles.shadowText}>{active.shadowText}</p>

                    <section className={styles.connectedPaths}>
                        <h4>Caminhos conectados</h4>
                        <div className={styles.pathGrid}>
                            {connectedPaths.map((path) => (
                                <article className={styles.pathCard} key={path.id}>
                                    <div className={styles.pathHeader}>
                                        <span>Caminho {path.pathNumber}</span>
                                        <strong>{path.letter}</strong>
                                    </div>
                                    <dl>
                                        <div>
                                            <dt>Ligacao</dt>
                                            <dd>{getConnection(path)}</dd>
                                        </div>
                                        <div>
                                            <dt>Letra</dt>
                                            <dd>{path.transliteration} / {path.spelling}</dd>
                                        </div>
                                        <div>
                                            <dt>Tarot</dt>
                                            <dd>{path.tarot}</dd>
                                        </div>
                                        <div>
                                            <dt>Astrologia</dt>
                                            <dd>{path.astrology}</dd>
                                        </div>
                                        <div>
                                            <dt>Numerologia</dt>
                                            <dd>{path.numerology}</dd>
                                        </div>
                                        <div>
                                            <dt>Sentido</dt>
                                            <dd>{path.meaning}</dd>
                                        </div>
                                    </dl>
                                </article>
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </section>
    )
}

export default Kaballah
