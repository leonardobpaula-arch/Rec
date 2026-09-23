const entrada = require('readline-sync');

let total = 0;

for (let produto = 1; produto <= 12; produto++){
    const valor = entrada.questionFloat(`${produto}o Ciclo de producao: `);
    total += valor;
}
console.log(`O total produzido foi de ${total}`)