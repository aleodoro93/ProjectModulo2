var converter = document.getElementById("Converte")
var selectedMedidas = document.getElementById("medidas")
var selectedSubMedidas = document.getElementById("subMedida");
var convertSelect = document.getElementById("outpSubMedida");
selectedSubMedidas.addEventListener("change", updateSubmed)
selectedMedidas.addEventListener("change", updateValues)
converter.addEventListener("click", converterUnidades)


/* funcao para primeiro select */

function updateValues() {

    /*  limpa o campo de saida   */
    convertSelect.innerHTML = `<option disabled selected >selecione outra medida</option>`

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
        convertSelect.innerHTML = `
    
    <option value="Polegadas">Polegadas</option> 
    <option value="Centimetros">Centimetros</option>`
    } else if (selectedSubMedidas.value === "Polegadas") {
        convertSelect.innerHTML = `
        
        <option value="Polegadas">Metros</option> 
        <option value="Centimetros">Centimetros</option>`
    } else if (selectedSubMedidas.value === "Centimetros") {
        convertSelect.innerHTML = `
        
        <option value="Polegadas">Metros</option> 
        <option value="Centimetros">Polegadas</option>`
    }

    /* update da opção peso  */

    else if (selectedSubMedidas.value === "Quilogramas") {
        convertSelect.innerHTML = `
        
        <option value="Gramas">Gramas</option> 
        <option value="Libras">Libras</option>`
    } else if (selectedSubMedidas.value === "Gramas") {
        convertSelect.innerHTML = `
        
        <option value="Quilogramas">Quilogramas</option> 
        <option value="Libras">Libras</option>`

    } else if (selectedSubMedidas.value === "Quilogramas") {
        convertSelect.innerHTML = `
        
        <option value="Gramas">Gramas</option> 
        <option value="Libras">Libras</option>`

    }
    /*  bloco para temperatura  */

    else if (selectedSubMedidas.value === "Celsius") {

        convertSelect.innerHTML = `
        
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (selectedSubMedidas.value === "Fahrenheit") {

        convertSelect.innerHTML = `
        
        <option value="Celcius">Celcius</option> 
        <option value="Kelvin">Kelvin</option>`

    } else if (selectedSubMedidas.value === "Kelvin") {

        convertSelect.innerHTML = `
        
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Celcius">Celcius</option>`
    }
}


var converter = document.getElementById("Converte");
var selectedMedidas = document.getElementById("medidas");
var selectedSubMedidas = document.getElementById("subMedida");
var convertSelect = document.getElementById("outpSubMedida");
var inputValue = document.getElementById("recebe");
var resultadoDiv = document.getElementById("resultado");

selectedSubMedidas.addEventListener("change", updateSubmed);
selectedMedidas.addEventListener("change", updateValues);
converter.addEventListener("click", converterUnidades);

function updateValues() {
    convertSelect.innerHTML = `<option disabled selected>selecione outra medida</option>`;

    if (selectedMedidas.value === "Comprimento") {
        selectedSubMedidas.innerHTML = `
        <option disabled selected>selecione uma medida</option>
        <option value="Metros">Metros</option>
        <option value="Polegadas">Polegadas</option> 
        <option value="Centimetros">Centimetros</option>`;
    } else if (selectedMedidas.value === "Peso") {
        selectedSubMedidas.innerHTML = `
        <option disabled selected>selecione uma medida</option>
        <option value="Quilogramas">Quilogramas</option>
        <option value="Gramas">Gramas</option>
        <option value="Libras">Libras</option>`;
    } else if (selectedMedidas.value === "Temperatura") {
        selectedSubMedidas.innerHTML = `
        <option disabled selected>selecione uma medida</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>`;
    }
}

function updateSubmed() {
    if (selectedSubMedidas.value === "Metros") {
        convertSelect.innerHTML = `
        <option value="Polegadas">Polegadas</option> 
        <option value="Centimetros">Centimetros</option>`;
    } else if (selectedSubMedidas.value === "Polegadas") {
        convertSelect.innerHTML = `
        <option value="Metros">Metros</option> 
        <option value="Centimetros">Centimetros</option>`;
    } else if (selectedSubMedidas.value === "Centimetros") {
        convertSelect.innerHTML = `
        <option value="Metros">Metros</option> 
        <option value="Polegadas">Polegadas</option>`;
    } else if (selectedSubMedidas.value === "Quilogramas") {
        convertSelect.innerHTML = `
        <option value="Gramas">Gramas</option> 
        <option value="Libras">Libras</option>`;
    } else if (selectedSubMedidas.value === "Gramas") {
        convertSelect.innerHTML = `
        <option value="Quilogramas">Quilogramas</option> 
        <option value="Libras">Libras</option>`;
    } else if (selectedSubMedidas.value === "Libras") {
        convertSelect.innerHTML = `
        <option value="Quilogramas">Quilogramas</option> 
        <option value="Gramas">Gramas</option>`;
    } else if (selectedSubMedidas.value === "Celsius") {
        convertSelect.innerHTML = `
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Kelvin">Kelvin</option>`;
    } else if (selectedSubMedidas.value === "Fahrenheit") {
        convertSelect.innerHTML = `
        <option value="Celsius">Celsius</option> 
        <option value="Kelvin">Kelvin</option>`;
    } else if (selectedSubMedidas.value === "Kelvin") {
        convertSelect.innerHTML = `
        <option value="Fahrenheit">Fahrenheit</option> 
        <option value="Celsius">Celsius</option>`;
    }
}
