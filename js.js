  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede envio automático

    validarCampo("username", valor => valor.trim() !== "", "Por favor, insira seu nome.");
    validarCampo("email", valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor), "Digite um email válido.");
    // Adicione mais chamadas `validarCampo()` para outros campos aqui
  });

  function validarCampo(id, validacao, mensagemErro) {
    const input = document.getElementById(id);
    const valor = input.value;
    const erro = document.getElementById("error-" + id);
    const iconeErro = document.getElementById("icon-error-" + id);
    const iconeSucesso = document.getElementById("icon-success-" + id);

    if (!validacao(valor)) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      erro.textContent = mensagemErro;
      erro.classList.remove("d-none");
      iconeErro.classList.remove("d-none");
      iconeSucesso.classList.add("d-none");
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      erro.classList.add("d-none");
      iconeErro.classList.add("d-none");
      iconeSucesso.classList.remove("d-none");
    }
  }

