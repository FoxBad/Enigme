function getValue() {

    var inputID = document.getElementById("id").value;
    var inputMDP = document.getElementById("mdp").value;
    if (inputID == "admin" && inputMDP == "admin") {
        alert("Mathilde");
    }  
    else {
        alert("Utilisateur ou mot de passe incorrect");
    }
}