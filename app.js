import PromptSync from "prompt-sync";
const prompt = PromptSync()
import hospedes from "./hospedes.js";
import adicionarHospede from "./adicionarHospede.js";
import listarHospedes from "./listarHospedes.js";
import attHospede from "./atualizarHospede.js";
import checkout from "./checkout.js";
import calcConta from "./calcContas.js";

let indice = true

do{
    console.log(`\n===== HOTEL LIONSINN =====\n
1 - Check-in (cadastrar hóspede)
2 - Listar hóspedes
3 - Atualizar hóspede
4 - Check-out (remover hóspede)
5 - Calcular conta
0 - Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case "1":
        let nHospede = adicionarHospede.coletaInformacoes(hospedes)
        adicionarHospede.addHospede(hospedes,nHospede)
        break
        case "2":
        listarHospedes(hospedes)
        break
        case "3":
        attHospede(hospedes)
        break
        case "4":
        checkout(hospedes)
        break
        case "5":
        calcConta(hospedes)
        break
        case "0":
        indice = false
        console.log("\n...Saindo do sistema...\n")
        break
        default:
            console.log("\nEscolha uma opção correspondente!")
    }
}while(indice === true)