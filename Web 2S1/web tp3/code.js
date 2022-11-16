function kaabaFrite() {
alert("bienvenue");
}

function affiche(){

    if ((document.f1.mois.value="dec") || (document.f1.mois.value="jan") || 
    (document.f1.mois.value="fev")){
       alert("hiver");
    return false;
    }
    else if ((document.f1.mois.value="mar") || (document.f1.mois.value="avr") || 
    (document.f1.mois.value="mai")){
       alert("printemps");
       return false;
    }
    
   else if ((document.f1.mois.value="jun") || (document.f1.mois.value="jul") || 
    (document.f1.mois.value="aug")){
       alert("été");
       return false;
    }

    else {
       alert("automne");
       return false;
    }


}

function con(){
   if(answer){
      alert("bye");
   }
   else{
      window.location="C:\Users\Oumayma\Desktop\web tp3"
   }
}


window.addEventListener('load',() => {
    
    loader.classList.add('fondu-out');
}
)