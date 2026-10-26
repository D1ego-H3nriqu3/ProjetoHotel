import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function attHospede(hospedes){
    console.log("\n------------------------\n")
    let id = Number(prompt("Digite o ID do hospede que gostaria de alterar: "))
    if(isNaN(id)){
        console.log("\nDigite um ID válido")
        return false
    }

    const indice = hospedes.findIndex((hospede) => hospede.id === id)
    if(indice === -1){
        console.log("\nHospede não encontrado")
        return false
    }

    let nome = (prompt("Digite o nome do hospede: ")).trim()

    let diaria = (prompt("Digite a quantidade de diárias do hospede: "))
    let Ndiaria = Number(diaria)
    if(diaria === ""){

    }else{
    if(isNaN(Ndiaria) || Ndiaria <= 0){
        console.log("Digite uma quantidade de diárias válidas!")
        return attHospede(hospedes)
    }
    }

    let servicos = []

    let resposta1 = (prompt("Trocar serviços? (sim/Enter) ")).trim().toLowerCase()
    if(resposta1 === "sim"){
        let resposta = ""
        do{
            let servico = (prompt("Digite o serviço a parte: ")).trim()
            if(servico === ""){
                
            }else{
                servicos.push(servico)
            }
            resposta = (prompt("Adicionar outro serviço? (sim/Enter) ")).trim().toLowerCase()
        }while(resposta === "sim")
}

    hospedes[indice].nome = nome || hospedes[indice].nome
    hospedes[indice].diarias = diaria || Ndiaria || hospedes[indice].diarias
    if(servicos.length === 0){
        hospedes[indice].servicos = hospedes[indice].servicos
    }else{
        hospedes[indice].servicos = servicos
    }

    console.log("\nHospede atualizado com sucesso!")
}