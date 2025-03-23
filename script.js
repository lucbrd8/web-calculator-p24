// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
// Code de Luc Biard

document.addEventListener("DOMContentLoaded",()=>{
    let resultat = 0;
    let last_real_action = null;
    let last_action =null;
    function affiche(event){
        let bouton_appuye = event.target;
        let valeur_affichee = document.querySelector(".calculator__display").textContent;
        let valeur_affichee_nombre = Number(valeur_affichee);
        let action = bouton_appuye.getAttribute("data-action");
        if (action =="clear"){
            document.querySelector(".calculator__display").textContent = 0;
            resultat = 0;
            last_real_action = null;
        }
        else if (last_action == null){
            if (bouton_appuye.classList.length == 0){
                valeurRécupérée = bouton_appuye.textContent;
                if (valeur_affichee !="0"){
                    document.querySelector(".calculator__display").textContent = valeur_affichee + valeurRécupérée;
                }
                else {
                    document.querySelector(".calculator__display").textContent = valeurRécupérée;
                }
            }
        }
        else if (last_action =="decimal"){
            valeurRécupérée = bouton_appuye.textContent;
            if (valeur_affichee !="0"){
                document.querySelector(".calculator__display").textContent = valeur_affichee + valeurRécupérée;
            }
        }
        else if (last_action !=null){
            resultat = Number(document.querySelector(".calculator__display").textContent)
            if (bouton_appuye.classList.length == 0){
                valeurRécupérée = bouton_appuye.textContent;
                document.querySelector(".calculator__display").textContent = valeurRécupérée;
            }
        }
        if (action=="calculate"){
            if (last_real_action=="add"){
                resultat = resultat + valeur_affichee_nombre;
            }
            if (last_real_action =="subtract"){
                resultat = resultat - valeur_affichee_nombre;
            }
            if (last_real_action =="multiply"){
                resultat = resultat*valeur_affichee_nombre;
            }
            if (last_real_action =="divide"){
                if (valeur_affichee == 0){
                    resultat = 0;
                }
                else{
                    resultat = resultat/valeur_affichee_nombre;
                }
            }
            document.querySelector(".calculator__display").textContent = resultat.toFixed(3);
            last_real_action = null;
        }
        last_action = action;
        if (last_action != null){
            last_real_action = last_action;
        }
    }
    for (const button of document.querySelectorAll('.calculator__keys')){
        button.addEventListener("click", (event)=> affiche(event))
    }
}
)