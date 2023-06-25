/* variaveis */
var mostrarNaTela = document.getElementById("exibir");
var selectedMedidas = document.getElementById("medidas");
var selectedSubMedidas = document.getElementById("subMedida");
var convertSelect = document.getElementById("outpSubMedida");
var resultado = ""
var button = document.getElementById("converte");
var empty = document.getElementById("empty")
selectedSubMedidas.addEventListener("change", updateSubmed);
selectedMedidas.addEventListener("change", updateValues);

button.addEventListener("click", function(event){
    event.preventDefault();
    converterUnidades();

} )





/* funcao para primeiro select */

function updateValues() {

    /*  limpa o campo de saida   */
    convertSelect.innerHTML = `<option value = "vazio" disabled selected >selecione outra medida</option>`

    if (selectedMedidas.value === "Comprimento") {

        selectedSubMedidas.innerHTML = `

        <option disabled selected >selecione uma medida</option>
        <option value="Metros">Metros</option>
        <option value="Polegadas">Polegadas</option> 
        <option value="Centimetros">Centimetros</option>`

    } else if (selectedMedidas.value === "Peso") {
        selectedSubMedidas.innerHTML = `

        <option disabled selected >selecione uma medida</option>
        <option value="Quilogramas">Quilogramas</option>
        <option value="Gramas">Gramas</option>
        <option value="Libras">Libras</option>`

    } else if (selectedMedidas.value === "Temperatura") {
        selectedSubMedidas.innerHTML = `
        <option disabled selected >selecione uma medida</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>`
    }
}

/* função para atualizar a submedida */
function updateSubmed() {

    if (selectedSubMedidas.value === "Metros") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
    <option value="Polegadas">Polegadas</option> 
    <option value="Centimetros">Centimetros</option>`

    } else if (selectedSubMedidas.value === "Polegadas") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
         <option value="Metros">Metros</option> 
         <option value="Centimetros">Centimetros</option>`
    } else if (selectedSubMedidas.value === "Centimetros") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Metros">Metros</option> 
        <option value="Polegadas">Polegadas</option>`
    }

    /* update da opção peso  */

    else if (selectedSubMedidas.value === "Quilogramas") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Gramas">Gramas</option> 
        <option value="Libras">Libras</option>`
    } else if (selectedSubMedidas.value === "Gramas") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Quilogramas">Quilogramas</option> 
        <option value="Libras">Libras</option>`

    } else if (selectedSubMedidas.value === "Libras") {

        convertSelect.innerHTML = `
        <option value="Gramas">Gramas</option> 
        <option value="Quilogramas">Quilogramas</option>`

    }
    /*  bloco para temperatura  */

    else if (selectedSubMedidas.value === "Celsius") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (selectedSubMedidas.value === "Fahrenheit") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Celsius">Celsius</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (selectedSubMedidas.value === "Kelvin") {
        convertSelect.innerHTML = ""
        convertSelect.innerHTML = `
        
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Celsius">Celsius</option>`
    }
}


/* func de conversion  */
function converterUnidades() {
    const inputValue = document.getElementById("recebe").value;
    var selectedMedida = selectedSubMedidas.value;
    var selectedOutpMedida = convertSelect.value;


    /* valida o campo de entrada */
    if (inputValue === "") {
        /* estilização da exibição na tela */
        mostrarNaTela.innerHTML = `Insira um valor valido`
        mostrarNaTela.style.color = "red"
        mostrarNaTela.style.textAlign = "center"
        mostrarNaTela.style.background = "white"
        mostrarNaTela.style.borderRadius = "50px"
        mostrarNaTela.style.boxShadow = "1px 1px 30px"
        mostrarNaTela.style.padding = "10px"
        mostrarNaTela.style.marginTop = "10%"
        return;
    }

    /* calculo de conversao metros polegadas e cm */
    else if (selectedMedida === "Metros") {
        if (selectedOutpMedida === "Polegadas") {
            resultado = (inputValue * 39.37).toFixed(2);
        } else if (selectedOutpMedida === "Centimetros") {
            resultado = (inputValue * 100).toFixed(2);
        }
    } else if (selectedMedida === "Polegadas") {
        if (selectedOutpMedida === "Metros") {
            resultado = (inputValue / 39.37).toFixed(2)
        } else if (selectedOutpMedida === "Centimetros") {
            resultado = (inputValue * 2.54).toFixed(2)
        }
    } else if (selectedMedida === "Centimetros") {
        if (selectedOutpMedida === "Metros") {
            resultado = (inputValue / 100).toFixed(2)
        } else if (selectedOutpMedida === "Polegadas") {
            resultado = (inputValue / 2.54).toFixed(2)
        }

        /* bloco de conversao para KG gramas e libras */
    } else if (selectedMedida === "Quilogramas") {
        if (selectedOutpMedida === "Gramas") {
            resultado = (inputValue * 1000).toFixed(2)
        } else if (selectedOutpMedida === "Libras") {
            resultado = (inputValue * 2.20462).toFixed(4)
        }
    } else if (selectedMedida === "Gramas") {
        if (selectedOutpMedida === "Quilogramas") {
            resultado = (inputValue / 1000).toFixed(4)
        } else if (selectedOutpMedida === "Libras") {
            resultado = (inputValue / 453.592).toFixed(4)
        }
    } else if (selectedMedida === "Libras") {
        if (selectedOutpMedida === "Quilogramas") {
            resultado = (inputValue / 2.20462).toFixed(2);
        } else if (selectedOutpMedida === "Gramas") {
            resultado = (inputValue * 453.592).toFixed(2)
        }
        
        /* bloco de conversao para celsius fr e kelvin */

    } else if (selectedMedida === "Celsius") {
        if (selectedOutpMedida === "Fahrenheit") {
            resultado = ((inputValue * 9) / 5 + 32).toFixed(2)
        } else if (selectedOutpMedida === "Kelvin") {
            resultado = (parseFloat(inputValue) + 273.15).toFixed(2)
        }
    } else if (selectedMedida === "Fahrenheit") {
    if (selectedOutpMedida === "Celsius") {
        resultado = ((inputValue - 32) * 5 / 9).toFixed(2)
    } else if (selectedOutpMedida === "Kelvin") {
        resultado = ((inputValue - 32) * 5 / 9 + 273.15).toFixed(2);
    }
} else if (selectedMedida === "Kelvin") {
    if (selectedOutpMedida === "Celsius") {
        resultado = (inputValue - 273.15).toFixed(2);
    } else if (selectedOutpMedida === "Fahrenheit") {
        resultado = ((inputValue - 273.15) * 9 / 5 + 32).toFixed(2);
    }
}
/* exibir na tela o resultado da conversao */
mostrarNaTela.innerHTML = `a conversao de ${selectedSubMedidas.value} para ${convertSelect.value} é de: ${resultado}`
mostrarNaTela.style.fontWeight = "900"
mostrarNaTela.style.color = "blue"
mostrarNaTela.style.textAlign = "center"
mostrarNaTela.style.background = "white"
mostrarNaTela.style.borderRadius = "50px"
mostrarNaTela.style.boxShadow = "1px 1px 30px"
mostrarNaTela.style.padding = "10px"
mostrarNaTela.style.marginTop = "10%"

}


