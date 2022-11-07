var btn = document.getElementById("fale_conosco");
var form = document.getElementById("call-act");
var btn_hamburger = document.getElementById("btn_hamburger");
var closeBtn = document.getElementById("close_menu");
var backToTop = document.getElementById("backToTop");

document.querySelector("#submit-btn").disabled = true;

function abbleButton(){
	const name = document.querySelector("#nome").value;
	const email = document.querySelector("#email").value;
	const telefone = document.querySelector("#tel").value;
	const nomeEmpresa = document.querySelector("#nomeEmpresa").value;

	if(name && email && telefone && nomeEmpresa != ""){
		
		document.querySelector("#submit-btn").disabled = false;
	
	}else{

		document.querySelector("#submit-btn").disabled = true;
	}
	}

	


btn.addEventListener("click", (e) => {
	e.preventDefault();
	form.classList.toggle("show");
});

btn.addEventListener("touchstart", (e) => {
	e.preventDefault();
	form.classList.toggle("show");
});

closeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	form.classList.toggle("show");
});
btn.addEventListener("touchstart", (e) => {
	e.preventDefault();
	form.classList.toggle("show");
});

closeBtn.addEventListener("touchstart", (e) => {
	e.preventDefault();
	form.classList.toggle("show");
});

function showForm() {
	event.preventDefault();
	form.classList.toggle("show");

	console.log(1);
}


function ativarBtn(){
	event.preventDefault();

	swal({
		title: "Recebemos sua mensagem!",
		text: "Excelente notícia, o primeiro passo para nossa parceria de sucesso foi dado, em breve alguém do nosso time entrará em contato com você!",
		icon: 'https://i.ibb.co/Wsy5byB/Group-6978.png',
		button: "Fechar!",
	  })
	  };


var disabled = document.getElementById("submit")

disabled = false;



const fields = document.querySelectorAll("[required]");

function customValidation(event) {
	//retirar o bubble
	event.preventDefault();

	const field = event.target;

	function verifyErrors() {
		let foundError = false;

		for (const error in field.validity) {
			if (field.validity[error] && !field.validity.valid) {
				foundError = error;
			}
		}

		return foundError;
	}

	const error = verifyErrors();
	console.log("Error Exists: ", error);

    const spanError = field.parentNode.querySelector("span.error")
    
    if (error) {
		spanError.classList.add("active");
spanError.innerHTML = ("Campo com Erro")
	} else {

        spanError.classList.remove("active");
        spanError.innerHTML = ("")
	}
}

for (field of fields) {
	field.addEventListener("invalid", customValidation);
    field.addEventListener("blur", customValidation);
}



