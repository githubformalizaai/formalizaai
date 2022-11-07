var doc_btn = document.getElementById("doc_btn");
var plan_btn = document.getElementById("plan_btn");
var msg_btn = document.getElementById("msg_btn");
var fide_btn = document.getElementById("fide_btn");
var cobranca_btn = document.getElementById("cobranca_btn");
var validade_btn = document.getElementById("validade_btn");


var documento = document.getElementById("documento");
var plan = document.getElementById("plan");
var mensalidade = document.getElementById("mensalidade");
var fidelidade = document.getElementById("fidelidade");
var cobranca = document.getElementById("cobranca");
var validade = document.getElementById("validade");




var mensagem;

plan_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "O registro do ato (Abertura, Alteração ou Encerramento) nos devidos órgãos, Receita Federal, Junta Comercial do Estado, Sefaz do Estado, Prefeitura da localidade e INSS."
    
    if(plan.innerHTML == ""){
        plan.innerHTML = mensagem;
        documento.innerHTML = "";
        mensalidade.innerHTML = "";
        fidelidade.innerHTML = "";
    } else {
        plan.innerHTML = ""
    }

})

doc_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "Geralmente, em média o tempo para formalização de um CNPJ leva entre 10 a 20 dias corridos, contudo, lembramos que para tal registro dependemos dos sistemas de terceiros, tais como: Receita Federal, Junta Comercial, Sefaz e Prefeituras. Nesse sentido informamos que havendo a impossibilidade de acesso por manutenção ou outro motivo esse tempo médio poderá ser alterado"

    if(documento.innerHTML == ""){
        documento.innerHTML = mensagem;
        plan.innerHTML = "";
        mensalidade.innerHTML = "";
        fidelidade.innerHTML = "";
    } else {
        documento.innerHTML = ""
    }

})


msg_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "As taxas relativas ao registro do processo não estão inclusas no valor."

    
    if(mensalidade.innerHTML == ""){
        mensalidade.innerHTML = mensagem;
        plan.innerHTML = "";
        documento.innerHTML = "";
        fidelidade.innerHTML = "";
    } else {
        mensalidade.innerHTML = ""
    }

})


fide_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "Não possui nenhuma fidelidade, podendo solicitar a desvinculação a qualquer momento, sem multa e obrigações."

    
    if(fidelidade.innerHTML == ""){
        fidelidade.innerHTML = mensagem;
        plan.innerHTML = "";
        mensalidade.innerHTML = "";
        documento.innerHTML = "";
    } else {
        fidelidade.innerHTML = ""
    }

})



validade_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "Tem a validade de 12 meses a partir do mês de pagamento."

    
    if(validade.innerHTML == ""){
        validade.innerHTML = mensagem;
        plan.innerHTML = "";
        mensalidade.innerHTML = "";
        documento.innerHTML = "";
    } else {
        validade.innerHTML = ""
    }

})

cobranca_btn.addEventListener("click", e => {
    e.preventDefault();
    mensagem = "Lembramos que somos uma empresa de processamento de dados e isso consome o que todos nós temos de mais precioso, nosso tempo. Nesse sentido, será cobrado o valor de 50% de um novo crédito, se houver a reabertura de um processo que foi aprovado ou validado."

    
    if(cobranca.innerHTML == ""){
        cobranca.innerHTML = mensagem;
        plan.innerHTML = "";
        mensalidade.innerHTML = "";
        documento.innerHTML = "";
    } else {
        cobranca.innerHTML = ""
    }

})