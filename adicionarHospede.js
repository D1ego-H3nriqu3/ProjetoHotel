import PromptSync from "prompt-sync";
const prompt = PromptSync()

function coletaInformacoes(hospedes){
    console.log("\n-------------------------------\n")
    let quarto = Number(prompt("Digite o n° do quarto: "))
    if(isNaN(quarto) || quarto <= 0){
        console.log("Digite um n° de quarto válido!")
        return coletaInformacoes(hospedes)
    }else{
        for(let i = 0; i < hospedes.length; i++){
            if(hospedes[i].quarto === quarto){
                console.log("Este quarto já está ocupado!")
                return coletaInformacoes(hospedes)
            }
        }
    }

    let nome = (prompt("Digite o nome do hospede: ")).trim()
    if(nome === ""){
        console.log("Digite um nome válido!")
        return coletaInformacoes(hospedes)
    }

    let diaria = Number(prompt("Digite a quantidade de diárias do hospede: "))
    if(isNaN(diaria) || diaria <= 0){
        console.log("Digite uma quantidade de diárias válidas!")
        return coletaInformacoes(hospedes)
    }

    let servicos = []

    let resposta1 = (prompt("Adicionar serviços? (sim/Enter) ")).trim().toLowerCase()
    if(resposta1 === "sim"){
        let resposta = ""
        do{
            let servico = (prompt("Digite o serviço a parte: ")).trim()
            if(servico === ""){
                console.log("Digite um serviço válido!")
                return coletaInformacoes(hospedes)
            }else{
                servicos.push(servico)
            }
            resposta = (prompt("Adicionar outro serviço? (sim/Enter) ")).trim().toLowerCase()
        }while(resposta === "sim")
    }
    return {
    quarto: quarto,
    nome: nome,
    diarias: diaria,
    servicos: servicos
}
}

function addHospede(hospedes, nHospede){
    if(hospedes.length > 0){
        let uElemento = hospedes.length - 1
        nHospede.id = hospedes[uElemento].id + 1
    }else{
        nHospede.id = 1
    }

    if(hospedes.push(nHospede)){
        console.log("\nCheck-in realizado com sucesso!")
    }else{
        console.log("\nOcorreu um erro no check-in do hospede!")
    }
}

export default {coletaInformacoes, addHospede}
