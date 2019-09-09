var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValido = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido)
    {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido)
    {
        console.log("Altura inválido!");
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }
    
}

function calculaImc(peso, altura)
{
    var imc = peso / (altura * altura);
    //console.log("Calculo de IMC funcionando. Retornando: " + imc.toFixed(2));
    return imc.toFixed(2);
}

function validaPaciente(paciente)
{
    var erros=[];
    if(paciente.nome.length == 0)
    {
        erros.push("Nome não pode ser em branco");
    }
    if(!validaPeso(paciente.peso))
    {
        erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura))
    {
        erros.push("Altura é inválida");
    }

    return erros;
}

function validaPeso(peso)
{
    if (peso <= 0 || peso > 1000) {
        return false;
    }
    else
    {
        return true;
    }
}

function validaAltura(altura)
{
    if (altura <= 0 || altura > 1000) {
        return false;
    }
    else
    {
        return true;
    }
}