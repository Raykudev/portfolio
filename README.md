# Portfolio – Valentin Wyss

Portfolio personnel réalisé en React dans le cadre de ma formation de développeur web et web mobile (PC WORKS31, Toulouse).

🔗 **En ligne :** https://valentin-wyss.infinityfree.io

## Contenu

- Accueil : présentation et formation
- À propos : informations personnelles
- Projets : [Canopées](https://github.com/Raykudev/canopees) et [Guide Kyoto](https://github.com/Raykudev/Projet-Kyoto)
- Contact : formulaire relié à [Web3Forms](https://web3forms.com) (les messages arrivent par email)

## Stack

- React + Vite
- CSS classique
- Web3Forms pour l'envoi du formulaire

Toutes les informations affichées (profil, infos, projets) sont regroupées dans `src/data.js`.

## Lancer le projet

```
npm install
npm run dev
```

Le site est ensuite accessible sur `http://localhost:5173`.

## Déploiement (InfinityFree)

1. `npm run build` génère la version de production dans `dist/`
2. Dans le File Manager d'InfinityFree, ouvrir le dossier `htdocs`
3. Supprimer les anciens fichiers, puis envoyer le **contenu** de `dist/` (`index.html`, `favicon.svg`, `assets/`)
