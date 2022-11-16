function verif_log(){
    if(formu.login.length!=0)
    {
        formu.password.disabled=false;
    }
}
function verif_password(){
    if(formu.password.length!=0)
    {
        formu.Confirmation.disabled=false;
    }
}

function success(){
    if((formu.login.value=="admin")&&(formu.password.value=="admin")){
        alert ('success'); 
    }
    else{
        alert ('erreur');
    }
}
