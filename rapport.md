# Rapport d'analyse manuelle – TP SonarQube

## Tableau des anomalies détectées

| Fichier             | Type              | Ligne(s) concernée(s) | Description du problème                                |
|---------------------|-------------------|------------------------|--------------------------------------------------------|
| userController.js   | Bug               | Ligne 15               | Utilisation de `=` au lieu de `==` dans une condition |
| userController.js   | Sécurité          | Ligne 9                | Injection SQL possible avec les entrées utilisateurs  |
| userController.js   | Code smell        | Plusieurs              | Code dupliqué pour la gestion des réponses            |
| auth.js             | Sécurité          | Ligne 8                | Mot de passe codé en dur                              |
| auth.js             | Code smell        | Ligne 8                | Pas de hachage de mot de passe                        |
| utils.js            | Code smell        | Ligne 8                | Connexion MySQL jamais fermée                         |
| utils.js            | Code smell        | Ligne 11               | Pas de gestion centralisée des erreurs                |
