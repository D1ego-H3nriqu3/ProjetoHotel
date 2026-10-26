import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function checkout(hospedes){
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

    console.log(`\nCheck-out de ${hospedes[indice].nome} realizado.`)
    hospedes.splice(indice, 1)
}