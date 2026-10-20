import { profil, competences, projets } from './data'

function App() {
  return (
    <>
      <header className="nav">
        <span className="logo">{profil.nom}</span>
        <nav>
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bonjour, je m'appelle {profil.nom}</h1>
          <p className="sous-titre">{profil.titre}</p>
          <p className="context">{profil.contexte}</p>
          <a className="bouton" href="#contact">Me contacter</a>
        </section>

        <section id="apropos">
          <h2>À propos</h2>
          <p>{profil.description}</p>
          <ul className="competences">
            {competences.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section id="projets">
          <h2>Projets</h2>
          <div className="grille">
            {projets.map((p) => (
              <article className="carte" key={p.titre}>
                <h3>{p.titre}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.lien && (
                  <a href={p.lien} target="_blank" rel="noreferrer">Voir le projet →</a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Une question ou une opportunité ? Écris-moi !</p>
          <div className="liens">
            <a href={`mailto:${profil.email}`}>Email</a>
            <a href={profil.github} target="_blank" rel="noreferrer">GitHub</a>
            {profil.linkedin && (
              <a href={profil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profil.nom}</footer>
    </>
  )
}

export default App
