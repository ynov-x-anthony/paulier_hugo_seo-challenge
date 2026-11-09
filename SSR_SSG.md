# SSR_SSG.md : à compléter

Pour CE catalogue (quelques dizaines de produits, mis à jour occasionnellement) :

1. Choisirais-tu plutôt du SSR, du SSG, ou du pré-rendu ? Justifie en une ou deux phrases en t'appuyant sur la fréquence de mise à jour du contenu.

   Je choisirais le SSG. Contrairement au SSR qui calcule les pages à chaque requête et au pré-rendu simple qui génère souvent une coquille HTML statique complétée ensuite en JS, le SSG génère l'intégralité du site sous forme de fichiers HTML complets dès le build. Pour un petit catalogue peu mis à jour, cela garantit les meilleures performances, un SEO maximal et un hébergement simplifié (CDN) sans serveur actif.

2. Si demain ce site affichait un **stock en temps réel** (quantité disponible qui change à chaque commande), ce choix changerait-il ? Pourquoi ?

   Oui, car le SSG figerait la donnée de stock au moment du build. Il faudrait alors évoluer soit vers du SSR pour pouvoir calculer le stock serveur à chaque visite, soit vers une approche hybride SSG + CSR pour garder la page statique en SSG et charger la donnée de stock dynamique via un appel API côté client.