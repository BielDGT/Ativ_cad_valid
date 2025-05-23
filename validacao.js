
// Validação do Nome
function verificarNome() {
    const nome = document.getElementById("nome").value;
    const nomeError = document.getElementById('mensagem-erro-nome');
    if (nome.length < 5) {
        nomeError.textContent = "Nome deve ter no mínimo 5 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();
        return false;

    } else if (nome.length > 60) {
        nomeError.textContent = "Nome deve ter no máximo 60 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();
        return false;

    } else if(nome === "") {
        nomeError.textContent = "O campo nome não pode estar vazio!";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();
        return false;
       
    } else {
        nomeError.textContent = "OK";
        nomeError.style.color = "green";
        return true;
    }
  }
  // Validação do E-mail
  
function verificarEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nome === "") {
        emailError.textContent = "E-mail é obrigatório.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
        return false;
    } else if (email.length > 100) {
        emailError.textContent = "E-mail deve ter no máximo 100 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
        return false;
    } else if (email.length < 5) {
        emailError.textContent = "E-mail deve ter no mínimo 5 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
        return false;
    }
     else if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
        return false;
    } else {
        emailError.textContent = "OK";
        emailError.style.color = "green";
        return true;
    }
}

//Validar Senha

function validaSenha() {
    const senha = document.getElementById('senha').value;
    const SenhaError = document.getElementById('erro-senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        SenhaError.textContent = "Senha não pode ser vazia";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;

    }else if (senha.length > 60) {
        SenhaError.textContent = "Senha não pode ser maior que 60 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;

    }else if (senha.length < 8) {
        SenhaError.textContent = "Senha não pode ser menor que 8 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;

    }else if (!regexMaiusculo.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Letras Maiúsculas";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;
    
    }else if (!regexEspecial.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Caracter Especial";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;

    }else if (!regexNumero.test(senha)) {
        SenhaError.textContent = "Senha tem que ter números";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
        return false;

    }else{
        SenhaError.textContent = "OK";
        SenhaError.style.color = "green";
        return true;
    }


}


// Validação da Confirmação de Senha

function confirmarSenha() {
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenhaError = document.getElementById('mensagem-erro-confirmar-senha');
    
    if (confirmarSenha !== senha) {
        confirmarSenhaError.textContent = "As senhas não coincidem.";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
        return false;
            
    } else if(confirmarSenha === "") {
        confirmarSenhaError.textContent = "Preencha o campo";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
        return false;
    } else {    
        confirmarSenhaError.textContent = "OK";
        confirmarSenhaError.style.color = "green";
        return true;
    }
}


// Telefone com Máscara
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: (XX)XXXXX-XXXX)
    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
    return true;
  }
     

// Validação do Telefone com Máscara
function validatelefone() {
          
    const  telefone = document.getElementById('telefone').value;
    const  mensagemErroTelefone = document.getElementById('mensagem-erro-telefone');
                
    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        mensagemErroTelefone.textContent = 'Telefone inválido! Certifique-se de que o número tenha o formato correto (XX) XXXXX-XXXX.';
        mensagemErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
        return false;
    } else {    
        mensagemErroTelefone.textContent = "OK";
        mensagemErroTelefone.style.color = "green";
        return true;
    }    
}


    // Validação da Cidade

function validacidade() {
    const cidade = document.getElementById('cidade').value;
    const mensagemCidade = document.getElementById('mensagem-cidade');
    if (cidade.length < 2 || cidade.length > 30) {
        mensagemCidade.textContent = "A cidade deve ter entre 2 e 30 caracteres.";
        mensagemCidade.style.color = "red";
        document.getElementById("cidade").focus();
        return false;
    } else{
        mensagemCidade.textContent = "OK";
        mensagemCidade.style.color = "green";
        return true;
        }
}

// Validação do Estado 

function validaestado() {
    const estado = document.getElementById('estado').value;
    const mensagemEstado = document.getElementById('mensagem-estado');
    if (estado.length !== 2) {
        mensagemEstado.textContent = "O estado deve ter exatamente 2 caracteres.";
        mensagemEstado.style.color = "red";
        document.getElementById("estado").focus();
        return false;
    } else{
        mensagemEstado.textContent = "OK";
        mensagemEstado.style.color = "green";
        return true;
        }
}



// Máscara para CPF (formato: XXX.XXX.XXX-XX)
function aplicarMascaraCPF(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara no formato XXX.XXX.XXX-XX
    if (valor.length <= 9) {
        valor = valor.replace(/(\d{3})(\d{0,3})(\d{0,3})/, "$1.$2.$3");
    } else {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    }

    input.value = valor;
    return true;
}
// Validação do CPF
function validacpf() {
    const cpf = document.getElementById('cpf').value;
    const mensagemErroCpf = document.getElementById('mensagem-cpf');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (cpf === "") {
        mensagemErroCpf.textContent = "CPF é obrigatório.";
        mensagemErroCpf.style.color = "red";
        document.getElementById("cpf").focus();
        return false;
    } else if (!cpfPattern.test(cpf)) {
        mensagemErroCpf.textContent = "CPF inválido. Use o formato XXX.XXX.XXX-XX.";
        mensagemErroCpf.style.color = "red";
        document.getElementById("cpf").focus();
        return false;
    } else {
        // Função para validar CPF
        if (!validarCPF(cpf)) {
            mensagemErroCpf.textContent = "CPF inválido.";
            mensagemErroCpf.style.color = "red";
            document.getElementById("cpf").focus();
            return false;
        } else {
            mensagemErroCpf.textContent = "OK";
            mensagemErroCpf.style.color = "green";
            return true;
        }
    }
}

// Função que valida a autenticidade do CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove qualquer caractere não numérico

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica se o CPF não é uma sequência de números repetidos (ex: 11111111111)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}



// Máscara para CEP (formato: XXXXX-XXX)
function aplicarMascaraCEP(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara no formato XXXXX-XXX
    if (valor.length <= 5) {
        valor = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    } else {
        valor = valor.replace(/(\d{5})(\d{3})/, "$1-$2");
    }

    input.value = valor;
    return true;
}

// Validação do CEP
function validacep() {
    const cep = document.getElementById('cep').value;
    const mensagemErroCep = document.getElementById('mensagem-cep');
    const cepPattern = /^\d{5}-\d{3}$/; // Verifica o formato XXXXX-XXX

    if (cep === "") {
        mensagemErroCep.textContent = "CEP é obrigatório.";
        mensagemErroCep.style.color = "red";
        document.getElementById("cep").focus();
        return false;
    } else if (!cepPattern.test(cep)) {
        mensagemErroCep.textContent = "CEP inválido. Use o formato XXXXX-XXX.";
        mensagemErroCep.style.color = "red";
        document.getElementById("cep").focus();
        return false;
    } else {
        mensagemErroCep.textContent = "OK";
        mensagemErroCep.style.color = "green";
        return true;
    }
}


// Validação da Data de Nascimento
function validanasc() {
    const nasc = document.getElementById('nasc').value;
    const mensagemNasc = document.getElementById('mensagem-nasc');
    
    // Verifica se a data está vazia
    if (nasc === "") {
        mensagemNasc.textContent = "A data de nascimento é obrigatória.";
        mensagemNasc.style.color = "red";
        document.getElementById("nasc").focus();
        return;
    }

    // Cria um objeto Date para comparar com a data atual
    const dataNasc = new Date(nasc);
    const dataAtual = new Date();

    // Verifica se a data de nascimento é invalida
    if (dataNasc > dataAtual) {
        mensagemNasc.textContent = "A data de nascimento Invalida.";
        mensagemNasc.style.color = "red";
        document.getElementById("nasc").focus();
        return false;
    } else {
        // Se a data de nascimento for válida
        mensagemNasc.textContent = "OK";
        mensagemNasc.style.color = "green";
        return true;
    }
}



// Função para aplicar a máscara no CNPJ
function aplicarMascaraCNPJ(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara no formato (XX.XXX.XXX/0001-XX)
    if (valor.length <= 14) {
        valor = valor.replace(/(\d{2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, "$1.$2.$3/$4-$5");
    }

    input.value = valor;
    return true;
}

// Função para validar o CNPJ
function validacnpj() {
    const cnpj = document.getElementById('cnpj').value;
    const mensagemCNPJ = document.getElementById('mensagem-cnpj');
    
    // Remove caracteres não numéricos
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpjLimpo.length !== 14) {
        mensagemCNPJ.textContent = "CNPJ inválido! Deve ter 14 dígitos.";
        mensagemCNPJ.style.color = "red";
        return false;
    }

    // Validação do CNPJ: algoritmo de cálculo dos dígitos verificadores
    if (!validarCNPJ(cnpjLimpo)) {
        mensagemCNPJ.textContent = "CNPJ inválido! Os números não passam na validação.";
        mensagemCNPJ.style.color = "red";
        return false;
    }

    mensagemCNPJ.textContent = "OK";
    mensagemCNPJ.style.color = "green";
    return true;
}

// Função que valida os dígitos do CNPJ
function validarCNPJ(cnpj) {
    let soma = 0;
    let i = 0;
    let peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    // Primeiro dígito verificador
    for (i = 0; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso[i];
    }
    let resto = soma % 11;
    if (resto < 2) {
        if (cnpj.charAt(12) !== '0') return false;
    } else {
        if (cnpj.charAt(12) !== (11 - resto).toString()) return false;
    }

    // Segundo dígito verificador
    soma = 0;
    peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (i = 0; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso[i];
    }
    resto = soma % 11;
    if (resto < 2) {
        if (cnpj.charAt(13) !== '0') return false;
    } else {
        if (cnpj.charAt(13) !== (11 - resto).toString()) return false;
    }

    return true;
}



// Função de validação do formulário de cadastro
function validarFormulario() {
    let valid = true;

    // Verificar Nome
    if (!verificarNome()) {
        valid = false;
    }

    // Verificar E-mail
    if (!verificarEmail()) {
        valid = false;
    }

    // Verificar Senha
    if (!validaSenha()) {
        valid = false;
    }

    // Verificar Confirmação de Senha
    if (!confirmarSenha()) {
        valid = false;
    }

    // Verificar Telefone
    if (!validatelefone()) {
        valid = false;
    }

    // Verificar Cidade
    if (!validacidade()) {
        valid = false;
    }

    // Verificar Estado
    if (!validaestado()) {
        valid = false;
    }

    // Verificar CPF
    if (!validacpf()) {
        valid = false;
    }

    // Verificar CNPJ
    if (!validacnpj()) {
        valid = false;
    }

    // Verificar CEP
    if (!validacep()) {
        valid = false;
    }

    // Verificar Data de Nascimento
    if (!validanasc()) {
        valid = false;
    }

    // Se algum campo for inválido, o formulário não será enviado
    if (!valid) {
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver correto, o formulário será enviado
    return true;
}




   