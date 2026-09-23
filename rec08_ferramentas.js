const entrada = require('readline-sync');

const ferramentas = [];

for(let i = 0; i < 4; i++){
    const material = {
        nome: entrada.question(`Digite o nome da ${i+1}a ferramenta: `),
        quantia: entrada.questionInt("Digite a quantia diponivel: "),
        Minimo: entrada.questionInt("Digite a quantia minima: "),
    }
    ferramentas.push(material);
}
console.log("=== RELATORIO DE ESTOQUE ===");

for(let i = 0; i < ferramentas.length; i++){
    const ferramenta = ferramentas[i];

    let situacao;
    if (ferramenta.quantia < ferramenta.Minimo){
        situacao = "REPOR";
    }else{
        situacao = "ESTOQUE SULFICIENTE";
    }
    console.log(`Material: ${ferramenta.nome}`);
    console.log(`Quantidade: ${ferramenta.quantia}`);
    console.log(`Estoque minimo: ${ferramenta.Minimo}`);
    console.log(`situacao: ${situacao}`);
};