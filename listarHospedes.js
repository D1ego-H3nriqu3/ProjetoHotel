export default function listarHospedes(hospedes){
    console.log("\n------------------------------\n")
    if(hospedes.length === 0){
        console.log("Não há nenhum hospede para mostrar!")
    }else{
        hospedes.forEach((hospede) => {
            console.log(`ID - ${hospede.id} | Quarto - ${hospede.quarto}
Hóspede - ${hospede.nome}
Diária(s) - ${hospede.diarias} | Valor hospedagem - ${hospede.diarias * 200} R$`)
            if(hospede.servicos.length === 0){
                console.log("Serviço(s) - Nenhum\n")
            }else{
                console.log(`Serviço(s) - ${hospede.servicos.join(" | ")}\n`)
            }
        })
    }
}