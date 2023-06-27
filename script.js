/* variaveis */

var mostrarNaTela = document.getElementById("exibir")
var SelecionarMedidas = document.getElementById("medidas")
var SelecionarSubMedidas = document.getElementById("subMedida")
var converterSelecao = document.getElementById("SaidaSubMedida")
var resultado = ""
var Botao = document.getElementById("converte");
SelecionarMedidas.addEventListener("change", AtualizarCategoria);
SelecionarSubMedidas.addEventListener("change", AtualizarSubMedida);


Botao.addEventListener("click", function (event) {
    event.preventDefault()
    converterUnidades()
    verificarSelecao()
    

})








/* funcao para primeiro select */

function AtualizarCategoria() {

    /*  limpa o campo de saida   */


    if (SelecionarMedidas.value === "Comprimento") {

        SelecionarSubMedidas.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Metros">Metros</option>
        <option value="Polegadas">Polegadas</option> 
        <option value="Centimetros">Centimetros</option>`

    } else if (SelecionarMedidas.value === "Peso") {
        SelecionarSubMedidas.innerHTML = `

        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Quilogramas">Quilogramas</option>
        <option value="Gramas">Gramas</option>
        <option value="Libras">Libras</option>`

    } else if (SelecionarMedidas.value === "Temperatura") {
        SelecionarSubMedidas.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>`
    }
}

/* função para atualizar a submedida */
function AtualizarSubMedida() {

    if (SelecionarSubMedidas.value === "Metros") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
    <option value="Polegadas">Polegadas</option> 
    <option value="Centimetros">Centimetros</option>`

    } else if (SelecionarSubMedidas.value === "Polegadas") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
         <option value="Metros">Metros</option> 
         <option value="Centimetros">Centimetros</option>`
    } else if (SelecionarSubMedidas.value === "Centimetros") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Metros">Metros</option> 
        <option value="Polegadas">Polegadas</option>`
    }

    /* update da opção peso  */

    else if (SelecionarSubMedidas.value === "Quilogramas") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Gramas">Gramas</option> 
        <option value="Libras">Libras</option>`
    } else if (SelecionarSubMedidas.value === "Gramas") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Quilogramas">Quilogramas</option> 
        <option value="Libras">Libras</option>`

    } else if (SelecionarSubMedidas.value === "Libras") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Gramas">Gramas</option> 
        <option value="Quilogramas">Quilogramas</option>`

    }
    /*  bloco para temperatura  */

    else if (SelecionarSubMedidas.value === "Celsius") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (SelecionarSubMedidas.value === "Fahrenheit") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Celsius">Celsius</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (SelecionarSubMedidas.value === "Kelvin") {
        converterSelecao.innerHTML = ""
        converterSelecao.innerHTML = `
        <option value = "vazio" disabled selected >selecione outra medida</option>
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Celsius">Celsius</option>`
    }
}


/* func de conversao  */
function converterUnidades() {
    var valorEntrada = document.getElementById("recebe").value;




    /* valida o campo de entrada */
    if (SelecionarMedidas.value === "vazio" || SelecionarSubMedidas.value ===  "vazio" || converterSelecao.value === "vazio"){
        alert("Selecione todas opções")
        return
    } else if (valorEntrada === ""){
        alert("Insira um valor valido")
        return
    }

    /* calculo de conversao metros polegadas e cm */
     else if (SelecionarSubMedidas.value === "Metros") {
        if (converterSelecao.value === "Polegadas") {
            resultado = (valorEntrada * 39.37).toFixed(2);
        } else if (converterSelecao.value === "Centimetros") {
            resultado = (valorEntrada * 100).toFixed(2);
        }
    } else if (SelecionarSubMedidas.value === "Polegadas") {
        if (converterSelecao.value === "Metros") {
            resultado = (valorEntrada / 39.37).toFixed(2)
        } else if (converterSelecao.value === "Centimetros") {
            resultado = (valorEntrada * 2.54).toFixed(2)
        }
    } else if (SelecionarSubMedidas.value === "Centimetros") {
        if (converterSelecao.value === "Metros") {
            resultado = (valorEntrada / 100).toFixed(2)
        } else if (converterSelecao.value === "Polegadas") {
            resultado = (valorEntrada / 2.54).toFixed(2)
        }

        /* bloco de conversao para KG gramas e libras */
    } else if (SelecionarSubMedidas.value === "Quilogramas") {
        if (converterSelecao.value === "Gramas") {
            resultado = (valorEntrada * 1000).toFixed(2)
        } else if (converterSelecao.value === "Libras") {
            resultado = (valorEntrada * 2.20462).toFixed(4)
        }
    } else if (SelecionarSubMedidas.value === "Gramas") {
        if (converterSelecao.value === "Quilogramas") {
            resultado = (valorEntrada / 1000).toFixed(4)
        } else if (converterSelecao.value === "Libras") {
            resultado = (valorEntrada / 453.592).toFixed(4)
        }
    } else if (SelecionarSubMedidas.value === "Libras") {
        if (converterSelecao.value === "Quilogramas") {
            resultado = (valorEntrada / 2.20462).toFixed(2);
        } else if (converterSelecao.value === "Gramas") {
            resultado = (valorEntrada * 453.592).toFixed(2)
        }

        /* bloco de conversao para celsius fr e kelvin */

    } else if (SelecionarSubMedidas.value === "Celsius") {
        if (converterSelecao.value === "Fahrenheit") {
            resultado = ((valorEntrada * 9) / 5 + 32).toFixed(2)
        } else if (converterSelecao.value === "Kelvin") {
            resultado = (parseFloat(valorEntrada) + 273.15).toFixed(2)
        }
    } else if (SelecionarSubMedidas.value === "Fahrenheit") {
        if (converterSelecao.value === "Celsius") {
            resultado = ((valorEntrada - 32) * 5 / 9).toFixed(2)
        } else if (converterSelecao.value === "Kelvin") {
            resultado = ((valorEntrada - 32) * 5 / 9 + 273.15).toFixed(2);
        }
    } else if (SelecionarSubMedidas.value === "Kelvin") {
        if (converterSelecao.value === "Celsius") {
            resultado = (valorEntrada - 273.15).toFixed(2);
        } else if (converterSelecao.value === "Fahrenheit") {
            resultado = ((valorEntrada - 273.15) * 9 / 5 + 32).toFixed(2);
        }
    }
    /* exibir na tela o resultado da conversao */
    mostrarNaTela.innerHTML = `A conversão de ${SelecionarSubMedidas.value} para ${converterSelecao.value} é de: ${resultado}`
    mostrarNaTela.style.fontWeight = "900"
    mostrarNaTela.style.color = "green"
    mostrarNaTela.style.textAlign = "center"
    mostrarNaTela.style.background = "white"
    mostrarNaTela.style.borderRadius = "50px"
    mostrarNaTela.style.boxShadow = "1px 1px 30px"
    mostrarNaTela.style.padding = "10px"
    mostrarNaTela.style.border = "solid green"


}





