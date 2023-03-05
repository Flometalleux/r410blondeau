'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDays();
	updateClock1();
	updateClock2();
	updateGraphicClock();
	inputNombre();
	menu();
}

function defineHeading1(){
	let h1=document.getElementById("title");
	h1.innerHTML = "Nouveau titre";
}

function defineHeading2(){
	let h2=document.getElementsByTagName("h2")[0];
	h2.innerHTML = "Nouveau titre2";
}

function defineHeading3(){
	let h2=document.getElementsByTagName("h2");
	var lh2=h2.length;
	if(lh2==0){
		document.title = "Blondeau Florian";
	}
	else{
		document.title=h2[lh2-1].textContent;
	}
}

function defineHeading4(){
	let hfOL=document.getElementsByClassName("firstOrLast");
	var lhfOL=hfOL.length;
	if(lhfOL%2==0){
		document.title=hfOL[0].textContent;
	}
	else if(lhfOL%2!=0){
		document.title=hfOL[lhfOL-1].textContent;
	}
	else{
		document.title = "Blondeau Florian";
	}
}

function swapInnerHTML(){
	let p1=document.getElementsByTagName("p")[0];
	let p2=document.getElementsByTagName("p")[1];

	var tmp=p2.textContent
	p2.innerHTML=p1.textContent;
	p1.innerHTML=tmp;
}

function dateAlter(){
	const jour=["lundi","mardi","mercredi","jeudi","vendredi"];
	const mois=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

	let divDateAlter=document.getElementById("update-date");
	let datePresente = new Date();
	let day = datePresente.getDay();
	let number = datePresente.getDate();
	let month = datePresente.getDate();
	let year = datePresente.getFullYear();
	let date = jour[day-1]+" "+number+" "+mois[month]+" "+year;
	let auteurFichier = document.getElementsByTagName("meta");
	let auteur = auteurFichier[1].getAttribute("content");
	let autreAuteur =  auteurFichier[auteurFichier.length-1].getAttribute("content");
	if(auteurFichier.length==2){
		var texte="Dernière modification : le "+date+" par "+auteur;
		divDateAlter.innerText=texte;
	}
	else{
		var texte="Dernière modification : le "+date+" par "+auteur+" , "+autreAuteur;
		divDateAlter.innerText=texte;
	}
}

function getNbDays(){
	let divDate=document.getElementById("tempsavant");
	let start = Date.now();
	let fromDate = new Date("2023-07-19");
	let date = fromDate-start;
	date=date/86400000;
	date=Math.trunc(date);
	document.addEventListener("click", function(){
		if(date<=1){
			var texte="il reste "+date+" jour avant le 19 juillet 2023";
			divDate.innerText=texte;
		}
		else{
			var texte="il reste "+date+" jours avant le 19 juillet 2023";
			divDate.innerText=texte;
		}
	})
}

function updateClock1(){
	let clock1=new Date();
	let heures=clock1.getHours();
	let minutes=clock1.getMinutes();
	let secondes=clock1.getSeconds();
	let pClock=document.getElementById("clock1");
	let intervalId
	var texte=heures+":"+minutes+":"+secondes;
	pClock.innerText=texte;
	intervalId=setInterval(updateClock1,1000);
}

function updateClock2(){
	let clock1=new Date();
	let heures=clock1.getHours();
	let minutes=clock1.getMinutes();
	let secondes=clock1.getSeconds();
	let pClock=document.getElementById("clock2");
	let intervalId
	var texte=heures+":"+minutes+":"+secondes;
	pClock.innerText=texte;
	intervalId=setTimeout(updateClock2,1000);
}

function updateGraphicClock(){
	let clock1=new Date();
	let heures=clock1.getHours();
	let minutes=clock1.getMinutes();
	let secondes=clock1.getSeconds();
	let stringheures=heures.toString();
	let stringminutes=minutes.toString();
	let stringsecondes=secondes.toString();
	let intervalId
	document.getElementById("heures1").src="assets/images/"+stringheures[0]+".gif";
	document.getElementById("heures2").src="assets/images/"+stringheures[1]+".gif";
	document.getElementById("minutes1").src="assets/images/"+stringminutes[0]+".gif";
	document.getElementById("minutes2").src="assets/images/"+stringminutes[1]+".gif";
	document.getElementById("secondes1").src="assets/images/"+stringsecondes[0]+".gif";
	document.getElementById("secondes2").src="assets/images/"+stringsecondes[1]+".gif";
	intervalId=setInterval(updateGraphicClock,1000);
}

function inputNombre(){
	var re = new RegExp("[0-9]+");
	var re2= new RegExp("[a-z]+|[A-Z]+");
	let input=document.getElementById("inputchangecouleur");
	input.addEventListener("input", function(){
		if((input.value).match(re2)){
			input.className="red";
		}
		else if((input.value).match(re)){
			input.className="green";
		}
		else{
			input.className="white";
		}
	})
}

function menu(){
	let menu1 = document.getElementById("informations");
	let menu2 = document.getElementById("recherche");
	let menu3 = document.getElementById("enseignement");
	let menu4 = document.getElementById("personnel");
	let sousmenu1 = document.getElementById("sousMenu1");
	let sousmenu2 = document.getElementById("sousMenu2");
	let sousmenu3 = document.getElementById("sousMenu3");
	sousmenu1.style.display = 'none';
	sousmenu2.style.display = 'none';
	sousmenu3.style.display = 'none';
	let button1 = "plus.gif";
	let button2 = "plus.gif";
	let button3 = "plus.gif";
	let button4 = "plus.gif";
	document.getElementById("liste1").src="assets/images/"+button1;
	document.getElementById("liste2").src="assets/images/"+button2;
	document.getElementById("liste3").src="assets/images/"+button3;
	document.getElementById("liste4").src="assets/images/"+button4;
	menu1.addEventListener("click", function(){
		if(button1=="plus.gif"){
			button1="moins.gif";
			document.getElementById("liste1").src="assets/images/"+button1;
		}
		else if(button1=="moins.gif"){
			button1="plus.gif";
			document.getElementById("liste1").src="assets/images/"+button1;
		}
		sousmenu1.style.display = sousmenu1.style.display === 'none' ? 'block' : 'none';
	})
	menu2.addEventListener("click", function(){
		if(button2=="plus.gif"){
			button2="moins.gif";
			document.getElementById("liste2").src="assets/images/"+button2;
		}
		else if(button2=="moins.gif"){
			button2="plus.gif";
			document.getElementById("liste2").src="assets/images/"+button2;
		}
		sousmenu2.style.display = sousmenu2.style.display === 'none' ? 'block' : 'none';
	})
	menu3.addEventListener("click", function(){
		if(button3=="plus.gif"){
			button3="moins.gif";
			document.getElementById("liste3").src="assets/images/"+button3;
		}
		else if(button3=="moins.gif"){
			button3="plus.gif";
			document.getElementById("liste3").src="assets/images/"+button3;
		}
		sousmenu3.style.display = sousmenu3.style.display === 'none' ? 'block' : 'none';
	})
	menu4.addEventListener("click", function(){
		if(button4=="plus.gif"){
			button4="moins.gif";
			document.getElementById("liste4").src="assets/images/"+button4;
		}
		else if(button4=="moins.gif"){
			button4="plus.gif";
			document.getElementById("liste4").src="assets/images/"+button4;
		}
	})
}
