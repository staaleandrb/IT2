function Registrer(){
	//Deklarer listen fagoversikt
	var fagoversikt = new Array();

	//Deklarer listen fagNavn. Hadde egentlig planer om  å hente inn fagnavnene direkte med elemetByClassName
	var fagNavn = new Array();
		fagNavn[0] = "Engelsk";
		fagNavn[1] = "Geografi";
		fagNavn[2] = "Historie";

	//Henter inn verdien til felte ekstrapoeng
	var ekstrapoeng = document.getElementById("ekstra").value;

	//Løkke som henter inn verdiene i alle innputtene.
	// Dette er laget som en løkke pga det vil komme ekstremt mange innput verdier siden det er mange fag.
	for(var j=0;j<fagNavn.length;j++){
		
		//Henter inn data
		var standPunkt =  document.getElementsByClassName("standpunkt")[j].value;
		var eksamen =  document.getElementsByClassName("eksamen")[j].value;

		// Lagrer data i arrayen.
		fagoversikt[j] = {fag:fagNavn[j],standpunkt:Number(standPunkt),eksamen:Number(eksamen)};
		}

	//Sorterer arrayen der den med høyest standpunktkarakter kommer øverst..
	fagoversikt.sort(function(a,b) {return b.standpunkt - a.standpunkt;});
		
	//Deklarer "hjelpevariable.
	var alleFag="";
	var Overskrift="<h3>Fagoversikt</h3><br>"
	var karSnitt;     
    var sumFag=0;
    var sumEksamen=0;
    var antfag;
    var antEksamen=0;

	//Traverserer arrayen fagoversikt og legger hele arrayen inn i en String. For sendere å skrive den ut.
	for(var i=0;i<fagoversikt.length;i++){
       		//Legger hele arrayen inn i Stringvariabelen allaFag.
       alleFag = alleFag + fagoversikt[i].fag +" Standpunkt: "+fagoversikt[i].standpunkt+" Eksamenskarakter: "+ fagoversikt[i].eksamen+"<br>";
       		//Summerer alle karakterene til standpunkt.
       sumFag = sumFag + Number(fagoversikt[i].standpunkt);
       		//Hvis faget har registrert en eksamenkarakter i det gitte faget vil eksamensresulatetene summert.
       if(Number(fagoversikt[i].eksamen>0)){
			sumEksamen = sumEksamen + Number(fagoversikt[i].eksamen);     
     		antEksamen++;
        	}  
         }
         //Regner ut karaktersnitte. 
        karSnitt = (sumFag+sumEksamen)/(fagoversikt.length + antEksamen);
        //Legger til en overskrift i starten av karakterlista.
        alleFag = Overskrift+alleFag;

        //Skriver ut verdiene til Div boksene.
		document.getElementById("fagoversikt").innerHTML = alleFag;
		document.getElementById("snittkarakter").innerHTML ="Ditt karaktersnitt: " + karSnitt;
		document.getElementById("totalpoengsum").innerHTML ="Total poengsum: " + karSnitt*10+ekstrapoeng;

}