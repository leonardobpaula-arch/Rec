const entrada = require('readline-sync');

let tempo = 0;

for (let registro = 1; registro <= 6; registro++){
    const valor = entrada.questionFloat(`${registro}o registro: `);
    tempo += valor;
}

const media = tempo / 6;

console.log(`Tempo total: ${tempo}`);
console.log(`Media de tempo: ${media}`);