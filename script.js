const listeMot = ["Cachalot","Pétunia","Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score= 0


let choix = prompt("Veuillez choisir la liste : mots ou phrases")
    while(choix !== "mots" && choix !== "phrases") {
       choix = prompt("veuillez choisir la liste : mots ou phrases")
    }

    if (choix === "mots") {
        for (let i = 0; i < listeMot.length; i++) {
        let motUtilisateur = prompt("Entrez le mot :" + listeMot[i])
        if (motUtilisateur === listeMot [i]) {
        score++ 
        }
        console.log("Votre score est de " + score + " sur " + listeMot.length) 
    } 
    
    }  else {
       for (let i = 0; i < listePhrases.length; i++) {
       let motUtilisateur = prompt("Entrez le mot :" + listePhrases[i])
       if (motUtilisateur === listePhrases[i]) {
       score++
         }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}

