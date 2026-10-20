import { useState, useEffect } from "react";
import { web3formsCle } from "./data";

const vide = { prenom: "", nom: "", email: "", message: "" };

function Formulaire() {
  const [champs, setChamps] = useState(vide);
  // "attente" | "envoi" | "ok" | "erreur"
  const [statut, setStatut] = useState("attente");

  // Le message de validation disparaît au bout de 5 secondes
  useEffect(() => {
    if (statut !== "ok") return;
    const minuteur = setTimeout(() => setStatut("attente"), 5000);
    return () => clearTimeout(minuteur); // annule le minuteur si besoin
  }, [statut]);

  // Met à jour le champ modifié (grâce à son attribut name)
  function modifier(e) {
    setChamps({ ...champs, [e.target.name]: e.target.value });
  }

  async function envoyer(e) {
    e.preventDefault(); // évite le rechargement de la page
    setStatut("envoi");

    try {
      const reponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsCle,
          subject: `Portfolio : message de ${champs.prenom} ${champs.nom}`,
          name: `${champs.prenom} ${champs.nom}`,
          email: champs.email,
          message: champs.message,
          botcheck: e.target.botcheck.checked,
        }),
      });
      const resultat = await reponse.json();

      if (resultat.success) {
        setStatut("ok");
        setChamps(vide);
      } else {
        setStatut("erreur");
      }
    } catch {
      setStatut("erreur");
    }
  }

  return (
    <form className="formulaire" onSubmit={envoyer}>
      <div className="ligne">
        <label>
          Prénom
          <input name="prenom" value={champs.prenom} onChange={modifier} required />
        </label>
        <label>
          Nom
          <input name="nom" value={champs.nom} onChange={modifier} required />
        </label>
      </div>

      <label>
        Email
        <input type="email" name="email" value={champs.email} onChange={modifier} required />
      </label>

      <label>
        Votre message
        <textarea name="message" rows="6" value={champs.message} onChange={modifier} required />
      </label>

      {/* Piège anti-spam : invisible pour les humains, coché par les robots */}
      <input type="checkbox" name="botcheck" className="cache" tabIndex="-1" autoComplete="off" />

      <button className="bouton" type="submit" disabled={statut === "envoi"}>
        {statut === "envoi" ? "Envoi en cours…" : "Envoyer"}
      </button>

      {statut === "ok" && <p className="msg-ok">Merci, votre message a bien été envoyé !</p>}
      {statut === "erreur" && (
        <p className="msg-erreur">Oups, l'envoi a échoué. Réessayez ou écrivez-moi directement par email.</p>
      )}
    </form>
  );
}

export default Formulaire;
