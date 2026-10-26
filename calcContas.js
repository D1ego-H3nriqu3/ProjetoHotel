import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function calcConta(hospedes){
    console.log("\n-----------------------------\n")
    let numero = Number(prompt("Digite o quarto do hospede que está fazendo check-out: "))
    if(isNaN(numero)){
        console.log("\nDigite um quarto válido")
        return false
    }

    const indice = hospedes.findIndex((hospede) => hospede.quarto === numero)
    if(indice === -1){
        console.log(`\nO quarto ${numero} está vazio;`)
        return false
    }

    console.log(`\n---Contas do quarto ${numero}: ${hospedes[indice].nome}\n`)
    console.log(`Diarias - ${hospedes[indice].diarias} X R$ 200 = ${hospedes[indice].diarias * 200}`)

        let total = hospedes[indice].diarias * 200
        let hospede = hospedes[indice]
        let servicos = hospede.servicos

    for(let i = 0; i < servicos.length; i++){
        let valor = hospede.servicos[i].length * 2.5

        console.log(`${hospede.servicos[i]} X ${hospedes[indice].diarias} = ${valor * hospedes[indice].diarias}`)
        total += valor * hospedes[indice].diarias
    }
    console.log(`Total gasto: ${total}`)
}