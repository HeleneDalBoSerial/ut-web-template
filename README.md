# @ugitech/web-template

Ce projet a pour but de servir de base à toute nouvelle application s'appuyant sur `Vue` et `Vuetify`.
Il permet d'appliquer par défaut le style graphique d'Ugitech et met à disposition quelques
composants prêts à l'emploi pour accélerer le développement de vos applications.

Ce projet permet:
- de déployer un package `npm` nommé `@ugitech/web-template`
- de déployer un [storybook](https://storybook.js.org/) servant de documentation et donnant des exemples d'utilisation du package

## Usage du package dans vos applications

`npm i @ugitech/web-template`

## Docker

Ce projet met à disposition:
- 1 `Dockerfile` pour construire l'image du [Storybook](https://storybook.js.org/)
- 1 fichier `docker-compose.yml` qui s'appuie sur le `Dockerfile` pour construire une image et lancer un container contenant le storybook

### Usage

#### docker-compose
```sh
# lance le container, accessible à l'adresse  localhost:8080
docker-compose up
```

#### Construire l'image
```sh
docker build . -t ugitech-storybook:1.0
```

#### Lancer un container à partir de l'image
```sh
docker run --name storybook -d -p 8080:80  ugitech-storybook:1.0
```

## Développement

Grossièrement, le flux de travail pour publier une nouvelle version du package ressemble à ceci:
- Installation des dépendances pour le développement `npm i`
- Installation des [peerDependencies](https://npm.github.io/using-pkgs-docs/package-json/types/peerdependencies.html): `npm i --no-save vue vuetify`
- développement de nouvelles fonctionnalités / nouveaux composants
- déclaration des types pour Typescript: `npm run build:types`
- construction de la librairie: `npm run build:lib`
- MaJ de la version du package: manuellement dans le `package.json` ou avec [`npm version`](https://docs.npmjs.com/cli/version)
- publication: `npm publish` (**\/!\\** vous devez configurer npm pour cibler votre [registy](https://docs.npmjs.com/using-npm/registry.html) privé)

### Composants

**Attention**: si vos composants Vue utilise des composants Vuetify (`v-row` ou `v-tooltip` par exemple), vous devez impérativement les déclarer dans l'objet `components` du composant Vue.

```js
// components/MyCustomComponent/MyCustomComponent.ts
import { VRow } from 'vuetify/lib';

export default Vue.extend({
    components: {
        VRow
    },
    template: `
        <v-row></v-row>
    `
})
```

### Installation des **peerDependencies**

`npm i --no-save vue vuetify`

**\/!\\** A chaque fois qu'on lance `npm i`, les peerDependencies sont retirées du dossier `node_modules`

### Build du storybook

/!\ les **peerDependencies** sont requises

`npm run build:storybook`

### Build de la librairie

/!\ les **peerDependencies** sont requises

`npm run build:lib`

### Déclarations des types Typescript

/!\ les **peerDependencies** sont requises

`npm run build:types`

### Problèmes connus

#### fichiers `.mdx` du storybook
- les lignes vides dans le template font échouer la compilation.

#### support de IE11

Le composant `v-menu` s'affiche mal sur Internet Explorer 11 (au 25/03/2020).

**!! Ne pas utiliser [la destructuration](https://exploringjs.com/es6/ch_destructuring.html) dans vos templates de composants**

**Ne pas écrire**
```html
<template v-slot:activator="{ on }">
    <div v-on="on"></div>
</template>
```

**Ecrire plutôt**
```html
<template v-slot:activator="obj">
    <div v-on="obj.on"></div>
</template>
```

### Support des navigateurs

Voir:
- https://cli.vuejs.org/guide/browser-compatibility.html#browserslist
- https://vuetifyjs.com/en/getting-started/browser-support/
- https://github.com/vuetifyjs/vuetify/issues?q=IE11

Il peut être utile de mettre à jour Vuetify pour bénéficier des dernières corrections, notamment
concernant Internet Explorer 11.

