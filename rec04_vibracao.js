const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Qual a forca da vibracao? ");

if(vibracao <= 3){
    console.log(`vibracao de forca: ${vibracao}/status: ESTAVEL`);
}else if(vibracao <= 6){
    console.log(`vibracao de forca: ${vibracao}/status: ATENCAO`);
}else{
    console.log(`vibracao de forca: ${vibracao}/status: CRITICO`)
}