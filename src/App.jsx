import { profil, projets, infos } from "./data";
import Formulaire from "./Formulaire";
import { Ordinateur, MotifCode, IconeGithub } from "./Illustrations";

const annee = new Date().getFullYear();

function App() {
  return (
    <>
      <header className="nav">
        <a href="/" className="logo">
          {profil.nom}
        </a>
        <nav className="navlink">
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-texte">
            <MotifCode />
            <p className="hero-intro">Bonjour, je m'appelle</p>
            <h1>{profil.nom}</h1>
            <p className="sous-titre">
              <span className="losange" aria-hidden="true">
                ◆
              </span>{" "}
              {profil.titre}
            </p>
            <p className="context">{profil.contexte}</p>
            <div className="hero-actions">
              <a className="bouton" href="#contact">
                Me contacter
              </a>
              <a
                className="icone"
                href={profil.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <IconeGithub />
              </a>
            </div>
          </div>

          <Ordinateur />

          <a
            className="defiler"
            href="#apropos"
            aria-label="Descendre vers À propos"
          >
            <span />
          </a>
        </section>

        <section id="apropos">
          <h2>Hello,</h2>
          <p>
            Je suis{" "}
            <strong className="moi">{profil.nom}</strong>
            , {profil.description}
          </p>
          <dl className="infos">
            {infos.map((info) => (
              <div key={info.label}>
                <dt>{info.label} :</dt>
                <dd>{info.valeur}</dd>
              </div>
            ))}
          </dl>
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
                  <a href={p.lien} target="_blank" rel="noreferrer">
                    Voir le projet →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>N'hésitez pas à me contacter, je suis à votre entière disposition pour plus d'informations</p>
          <Formulaire />
          <div className="liens">
            <a href={`mailto:${profil.email}`}>Email</a>
            <a href={profil.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {annee} {profil.nom} - Tous droits réservés
      </footer>
    </>
  );
}

export default App;
