
const adicionarTarefa = () => {
    const campoTarefa = document.getElementById("tarefa")

    if (campoTarefa.value !== ""){

        const selecaoDiasSemana = document.getElementById("dias-semana")

        const selecaoHoraTarefa = document.getElementById("hora-tarefa")
        
        const divSemanaSelecionada = document.getElementById(selecaoDiasSemana.value)
        divSemanaSelecionada.innerHTML +=  `<li onclick="riscarTarefa(this)">${selecaoHoraTarefa.value}:00h ${campoTarefa.value}</li>`  

        campoTarefa.value = ""

    } else {
        alert("Campo Tarefa em branco, por favor digite a tarefa a ser realizada !")
    }
    
    
}

const riscarTarefa = (obj) => {
    obj.style.textDecoration = "line-through";
}


const limparTarefas = () => {
    const divDomingo = document.getElementById("domingo")
    divDomingo.innerHTML = ""
    
    const divSegunda = document.getElementById("segunda")
    divSegunda.innerHTML = ""

    const divTerca = document.getElementById("terca")
    divTerca.innerHTML = ""

    const divQuarta = document.getElementById("quarta")
    divQuarta.innerHTML = ""

    const divQuinta = document.getElementById("quinta")
    divQuinta.innerHTML = ""

    const divSexta = document.getElementById("sexta")
    divSexta.innerHTML = ""

    const divSabado = document.getElementById("sabado")
    divSabado.innerHTML = ""
}