function verifiertext()
{
    nom=document.getElementById("nom").value;
    if(/[A-Za-z]/.test(nom)==false)
    {
        alert("uniquement des lettres");
    }
}
function valider()
{
    document.getElementById("prenom").value=document.getElementById("prenom").value.replace(/[^a-z]/,"");
}
function mail()
{
    emm=document.getElementById("email").value;
    if(/gmail.com$/.test(emm)==false)
    {
        alert("mail invalide");
    }
}