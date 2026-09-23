const entrada = require('readline-sync');

const nome = entrada.question("Qual peca voce deseja? ");
const quantidade = entrada.questionInt("Quantas pecas voce precisa? ");
const preco = entrada.questionFloat("Qual o preco dessa peca? ");

const total = quantidade * preco;

console.log(`Peca ${nome}`);
console.log(`${quantidade} pecas`);
console.log(`Preco da peca e de: ${preco}`);
console.log(`O valor total da compra foi de ${total} reais`);