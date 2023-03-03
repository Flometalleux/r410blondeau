# M413 - TD1 : Réponses aux Questions

## EXERCICE 1

### 6.1

#### Q1

Ce qui déclenchera l'appelle sera le changement de page.

#### Q2

document.getElementById("title");

#### Q3

on utilise l'id

#### Q4

document.ElementsByTagName("h2")[0];

#### Q5

h2.length

#### Q6

document.getElementsByClassName("firstOrLast");

#### Q7

h.length%2==0

### 6.2

#### Q8

InnerHTML : récupère ou définit la syntaxe HTML décrivant les descendants de l'élément
InnerText : représente le contenue textuel « visuellement rendu » d’un noeud
textContent : représente le contenue textuel d'un noeud et de c'est descendant

### 6.3

#### Q9

let auteur = auteurFichier[1].getAttribute("content");
let autreAuteur =  auteurFichier[auteurFichier.length-1].getAttribute ("content");

## Exercice 2

### 7

#### Q10

const start = Date.now();
let fromDate = new Date("2023-07-19");
let date = fromDate-start;
date=date/86400000;
date=Math.trunc(date);

if(date<=1){
	var texte="il reste "+date+" jour avant le 19 juillet 2023";
	divDate.innerText=texte;
}
else{
	var texte="il reste "+date+" jours avant le 19 juillet 2023";
	divDate.innerText=texte;
}

### 7.1

#### Q11

J'ai utilisé setInterval() car cela permet d'update l'horloge a un intervalle régulier.

## 8

### 8.1

#### Q12

document.addEventListener("Input", function(){

let input=document.getElementById("inputchangecouleur");
input.className="green";

### 8.2

### 9