function getValue() {

    var inputID = document.getElementById("id").value;
    var inputMDP = document.getElementById("mdp").value;
    if (inputID == "753951" && inputMDP == "8426") {
        alert("Bienvenue " + inputID);
    }  
    else {
        alert("Utilisateur ou mot de passe incorrect");
    }
}