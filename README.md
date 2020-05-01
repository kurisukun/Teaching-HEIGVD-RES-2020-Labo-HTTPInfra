**Auteur:** Chris Barros Henriques



## RES: Rapport HTTPInfra





### Étape 1:



J’ai décidé de partir simplement sur la Docker image officielle de php, plus spécialement celle qui utilise Apache. 

Après avoir regardé le dépôt de celui-ci, j’obtiens le dockerfile suivant: 

```dockerfile
FROM php:7.2-apache

COPY src/ /var/www/html/
```



Après l’instanciation de celui-ci, j’ai changé le contenu du serveur pour rendre le site Web plus esthétique. Je suis alors parti sur le template *Clean Blog* trouvable [ici](https://startbootstrap.com/themes/clean-blog/). 

Après avoir copié les fichiers, j’ai quelque peu modifié le texte HTML de la page index.html afin qu’il corresponde un peu plus à ce que je veux.

