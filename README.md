**Auteur:** Chris Barros Henriques



## RES: Rapport HTTPInfra





### Étape 1:

Cette étape visait à implémenter un serveur HTTP statique.

J’ai décidé de partir simplement sur la Docker image officielle de php, plus spécialement celle qui utilise Apache. 

Après avoir regardé le dépôt de celui-ci, j’obtiens le Dockerfile suivant: 

```dockerfile
FROM php:7.2-apache

COPY src/ /var/www/html/
```



Après l’instanciation de celui-ci, j’ai changé le contenu du serveur pour rendre le site Web plus esthétique. Je suis alors parti sur le template *Clean Blog* trouvable [ici](https://startbootstrap.com/themes/clean-blog/). 

Après avoir copié les fichiers, j’ai quelque peu modifié le texte HTML de la page index.html afin qu’il corresponde un peu plus à ce que je veux.





### Étape 2:

Cette étape vise à implémenter un serveur HTTP dynamique.

Pour se faire, je suis parti sur l’image Docker de Node.js version 12.16.3 LTS ainsi que le framework Express.js. 

Après avoir regardé le dépôt, on a le Dokcerfile suivant:

```dockerfile
FROM node:12.16.3
COPY src /opt/app
CMD ["node", "/opt/app/index.js"]
```

Celui-ci permet de copier le contenu du dossier src dans /opt/app du conteneur. Lorsqu’on le démarre, il doit exécuter la commande `node /opt/app/index.js` afin de lancer le serveur grâce à node.



Lorsque le serveur est lancé, celui-ci écoute sur le port 3000.

À la différence du postcast où le serveur génère une liste de personnes, ici le serveur retourne simplement une liste de nombres premiers.   

```js
function generatePrime(){
        var nbPrimes = 10;

        var primes = [];
        console.log("Generating " + nbPrimes + " prime numbers");
        for(var i = 0; i < nbPrimes; ++i){
                primes.push({
                        id: i,
                        prime: chance.prime({min: 10000, max: 1000000})
                });
        }
        console.log(primes);
        return primes;
}
```



