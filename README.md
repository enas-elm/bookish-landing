# Landing Page Bookish

La Landing Page "Bookish" est conçue pour mettre en avant les valeurs de l'application et ce qu'elle offre afin d'attirer les clients. Elle présente de manière claire et engageante les avantages de notre service, soulignant comment il peut enrichir l'expérience de lecture de nos utilisateurs. Cette approche vise à convertir les visiteurs en utilisateurs réguliers en leur montrant précisément ce que "Bookish" peut leur apporter.

# Technologies 

Voici toutes les technologies utilisées pour créer la Landing Page:

## ReactJs
- **Composants Réutilisable** : ReactJS nous permet de construire une interface utilisateur avec des composants qui peuvent être réutilisés, rendant le code plus propre et la maintenance plus facile.
  
- **Performance** : Grâce au Virtual DOM, ReactJS améliore les performances de notre application en minimisant les mises à jour du DOM réel, ce qui est essentiel pour une page d'accueil qui attire de nombreux visiteurs.
  
- **Écosystème Riche** : L'écosystème de ReactJS offre une multitude de bibliothèques et de frameworks qui peuvent être intégrés facilement, améliorant ainsi notre capacité à implémenter des fonctionnalités avancées.

## TailWind CSS
- **Design Personnalisable** : Tailwind CSS fournit un système de classes utilitaires qui nous permet de styliser notre application de manière précise sans écrire de CSS excessif.
  
- **Responsive Design** : Il est facile de créer des designs responsives grâce à ses classes préfixées pour différentes tailles d'écran, assurant que notre page d'accueil est optimisée pour tous les appareils.
  
- **Rapidité de Développement** : Tailwind CSS accélère le processus de développement en réduisant le temps passé à écrire et à maintenir des feuilles de style complexes.

## GSAP (GreenSock Animation Platform)
- **Animations Complexes** : GSAP nous permet de créer des animations complexes et performantes, essentielles pour capter l'attention des utilisateurs dès le premier instant.
  
- **Compatibilité Navigateurs** : GSAP gère les incompatibilités entre navigateurs, garantissant que nos animations fonctionnent de manière fluide sur tous les types de dispositifs et navigateurs.
  
- **Contrôle Précis** : Avec GSAP, nous avons un contrôle précis sur le timing et le déroulement des animations, ce qui est crucial pour une expérience utilisateur interactive et engageante.
# Pour Commencer avec Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter:

```
npm start
```

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera si vous faites des modifications.\
Vous pourriez également voir des erreurs de lint dans la console.

```
npm test
```

Lance l'exécuteur de tests en mode interactif continu.\
Consultez la section [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

```
npm run build
```

Construit l'application pour la production dans le dossier `build`.\
Elle regroupe correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

Consultez la section sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

```
npm run eject
```

**Note : ceci est une opération à sens unique. Une fois que vous `eject`, vous ne pouvez pas revenir en arrière !**

Si vous n'êtes pas satisfait des outils de construction et des choix de configuration, vous pouvez `ejecter` à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet pour que vous ayez un contrôle total sur eux. Toutes les commandes, à l'exception de `eject`, continueront de fonctionner, mais elles pointeront vers les scripts copiés afin que vous puissiez les ajuster. À ce stade, vous êtes livré à vous-même.

Vous n'avez pas besoin d'utiliser `eject`. L'ensemble de fonctionnalités organisées convient aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt pour cela.

## Installation de Tailwind CSS et GSAP

Pour enrichir notre projet avec des styles et animations avancées, nous intégrons Tailwind CSS et GSAP. Voici comment les installer:

### Installation de Tailwind CSS

- Exécutez la commande suivante dans votre terminal pour installer Tailwind CSS via npm :
  
   ```
    npm insall tailwindcss
   ```
  
- Initialisez Tailwind en créant un fichier de configuration :
  
  ```
   npm tailwindcss init
  ```

- **Configurer Tailwind** : Ajoutez les chemins vers vos fichiers HTML, JSX ou tout autre fichier utilisant Tailwind dans votre fichier de configuration `tailwind.config.js` sous la clé `content`.

- **Inclure Tailwind dans votre CSS** : Ouvrez ou créez un fichier CSS et ajoutez les directives `@tailwind` pour les styles de base, composants et utilitaires :
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### Installation de GSAP: 

- Exécutez la commande suivante dans votre terminal pour installer GSAP via npm :
  ```
  npm install gsap
  ```
- **Utiliser GSAP** : Vous pouvez maintenant importer GSAP dans vos composants React et utiliser ses méthodes pour animer des éléments :
  ```
  import { gsap } from 'gsap';

  // Exemple d'animation
  gsap.to('yourElement', { duration: 1, x: 100 });
  ```

## Pour en Savoir plus

Vous pouvez en apprendre davantage dans la [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [React documentation](https://reactjs.org/).

### Découpage du Code

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyse de la Taille du Bundle

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Création d'une Application Web Progressive

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuration Avancée

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Déploiement

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` échoue à minifier

Cette section a été déplacée ici: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
