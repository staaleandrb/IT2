/* Laget av Staale Bergersen CC */

window.onload = oppstart;

function oppstart(){
    document.getElementById("knapp").onclick = beregn;
}

function beregn(){
    var snitt = document.getElementById("snittPoeng").value;
    var tilleggspoeng = document.getElementById("tilleggsPoeng").value;
    var sum = Number(snitt*10)+Number(tilleggspoeng);
    var grense = document.getElementById("studiet").value;
    if(sum >=grense){tibakemelding.innerHTML = "Du kom inn på studiet med "+sum+" poeng GRATULERER";}
    else{tibakemelding.innerHTML = "Du kom ikke inn på studiet med "+sum+" poeng";}
}