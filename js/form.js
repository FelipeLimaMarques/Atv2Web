var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona pacientes no form
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    // Validar paciente
    erros = validaPaciente(paciente);

    if(erros.length > 0)
    {
        exibeErros(erros);
        console.log("Paciente Inválido");
        return;
    }

    var pacienteTr = montaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});

function exibeErros(erros)
{
    var ulErros = document.querySelector("#mensagem-erro");
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ulErros.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form)
{
    var paciente = 
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

function montaTd(paciente, classe)
{
    var pacienteTd =
    {
        nomeTd: document.createElement(classe),
        pesoTd: document.createElement(classe),
        alturaTd: document.createElement(classe),
        gorduraTd: document.createElement(classe),
        imcTd:  document.createElement(classe),
    }
    
    pacienteTd.nomeTd.textContent = paciente.nome;
    pacienteTd.pesoTd.textContent = paciente.peso;
    pacienteTd.alturaTd.textContent = paciente.altura;
    pacienteTd.gorduraTd.textContent = paciente.gordura;
    var imc = calculaImc(paciente.peso, paciente.altura);
    pacienteTd.imcTd.textContent = imc;

    return pacienteTd;
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    var pacienteTd = montaTd(paciente, "td");

    pacienteTr.appendChild(pacienteTd.nomeTd);
    pacienteTr.appendChild(pacienteTd.pesoTd);
    pacienteTr.appendChild(pacienteTd.alturaTd);
    pacienteTr.appendChild(pacienteTd.gorduraTd);
    pacienteTr.appendChild(pacienteTd.imcTd); 

    return pacienteTr;
}