const entrada = require('readline-sync');

const nivel = entrada.questionInt("Qual a porcentagem do nivel de oleo? ");

if(nivel >= 40 && nivel <= 80){
    console.log("NIVEL NORMAL")
}else{
    console.log("INSPECAO NECESSARIA")
}