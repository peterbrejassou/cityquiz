
# CITY QUIZ

## Présentation
Application mobile avec comme concept de base un quiz. L’utilisateur doit deviner le nom d’une ville ou d’un lieu en particulier dans une ville, grâce à un élément affiché pour chaque question. Cet élément peut être :
- une photo (drapeau, monument, élément emblématique, etc.)
- un son
- des coordonnées GPS
- une énigme (phrase, encodage, etc.)
 
## Détails

L’application est composée de 5 grandes parties :
 
1. Le jeu
Cela se présente sous forme d’une carte centrale avec un élément au centre, une question juste en dessous et 4 propositions de réponse. Il y également un indice disponible sous en bas, il est échangeables contre des points (variable selon la difficulté du niveau).
Il y a plusieurs niveaux, au fur et à mesure la difficulté augmente, les éléments sont plus abstraits et les propositions de réponse moins évidente (plusieurs lieux proches par exemple).

2. Badges
Tous les badges de l’application sont affichés dans cette section. En premier les badges débloqués par l’utilisateur, en couleur. Puis en dessous, les autres badges pas encore débloqués en désaturés gris.

3. Profil
Informations de l’utilisateur : pseudo, nombre de pièces, statistiques du jeu (par ex. nombre de lieux découverts, temps passé sur l’appli, nombre d’indices utilisés, etc.)

4. Classement
Liste des meilleurs joueurs avec les points de chacuns. 
Une (ou 2) section(s) : 
une globale avec les scores des meilleurs joueurs
(une section “amis” avec le classement et les scores de ses amis)

5. Proposer un lieu
L’utilisateur a la possibilité d’ajouter lui aussi des éléments pour faire découvrir sa ville ou lieux qu’il apprécie. Pour cela, un formulaire comprenant plusieurs champs lui est proposé. Il renseigne le nom du lieux, les 3 réponses fausses, l’indice éventuel, ainsi que l’image “énigme”. Il a également à sa disposition les règles de publication avec les modalités et les indications concernant la modération avant publication. En proposer un lieu, l’utilisateur gagne des points et des pièces. 

##  Instructions d'installation : 
 - Cloner le dépôt
 - Lancer la commande 'yarn' pour installer les packages
 - Lancer la commande 'react-native run-android' pour lancer le serveur de dev

## Partie technique

Cette application est réalisée avec le framework [ReactNative](https://reactnative.dev/), utilisant le langage Javascript.

## Design de l'application

Retrouvez le design de l'application [ici](https://www.figma.com/file/bdkh1gTAganGrMnGYNM1nYoO/City-Quiz?node-id=0%3A1).
