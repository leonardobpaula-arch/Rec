function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const total = entrada.questionInt("Digite a quantidade total:");
const util = entrada.questionInt("Digite a quantidade útil:");

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log(`\nTotal: ${total}`);
console.log(`Quantidade útil: ${util}`);
console.log(`Percentual: ${percentual.toFixed(2)} %`);
console.log(`Classificação: ${classificacao}`);