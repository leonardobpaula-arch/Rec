const entrada = require('readline-sync');

const caixas = entrada.question("Quantas caixas sao produzidas por hora? ");
const trabalho = entrada.question("Quantas horas foram trabalhadas no dia? ");

const total = caixas * trabalho;

console.log(`Foram produzidas ${caixas} caixas no total`);
console.log(`${trabalho} horas foram tabalhadas`);
console.log(`O total de producao foi de ${total} `);