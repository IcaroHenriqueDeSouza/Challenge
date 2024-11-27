const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    checkInputs()
});

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const telefoneValue = telefone.value
    const assuntoValue = assunto.value
    const mensagemValue = mensagem.value

    if (usernameValue===''){
        setErrorFor(username,'É necessário inserir o nome');
    } else{
        setSuccessFor (username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'É necessário inserir o email');
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, 'É necessário inserir o email corretamente')
    } else {
        setSuccessFor(email);
    }

    if (telefoneValue===''){
        setErrorFor(telefone,'É necessário inserir o número de telefone');
    } else if (telefoneValue.length < 9) {
        setErrorFor(telefone, "O número deve conter 9 caracteres")
    } else {
        setSuccessFor (telefone);
    }

    if (assuntoValue===''){
        setErrorFor(assunto,'É necessário inserir o assunto');
    } else{
        setSuccessFor (assunto);
    }

    if (mensagemValue===''){
        setErrorFor(mensagem,'É necessário inserir a mensagem');
    } else{
        setSuccessFor (mensagem);
    }

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className ==='form-control succcess');
    });

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    // add classe de error
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input){
    const  formControl = input.parentElement;

    //add classe de success
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}