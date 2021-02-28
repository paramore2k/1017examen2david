- Étapes pour publier notre site web via Github Pages -

1. Normalement, il faudrait effectuer un git init, mais puisque nous avons déjà un répertoire, nous sauterons cet étape.
2. Ajout de la branche créer précédémment via le terminal phpstorm avec la commande git remote add origin https://github.com/paramore2k/paramore2k.github.io
3. On effectue un npm run build afin de compiler notre site web en vue d'être prêt au déploiment.
4. On tappe git --work-tree dist add --all afin d'ajouter les fichiers situés dans dist
5. On tappe git --work-tree dist commit -m "La raison de notre commit"
6. On tappe git push origin HEAD:main --force ce qui poussera notre répertoire dist sur notre branche github pages.

Site accessible via https://github.com/paramore2k/paramore2k.github.io
