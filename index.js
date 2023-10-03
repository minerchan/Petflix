botaoCriarConta.addEventListener("click", () => {
  loginTitulo.textContent = "Criar conta";
  loginDados.placeholder = "Insira o nome desejado para a conta";
  loginSenha.placeholder = "Insira a senha desejada";
  loginSubmit.textContent = "Criar";
});

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginSubmit.textContent === "Entrar") {
    // lógica de conferência dos dados para entrar na página
    let nomeLocal = localStorage.getItem("nome");
    let senhaLocal = localStorage.getItem("senha");
    if (loginDados.value === nomeLocal && loginSenha.value === senhaLocal) {
      window.location.href = "menu.html";
    } else {
      alert(
        "Nome e senha inválidos, por favor faça o cadastro ou insira corretamente"
      );
    }
  } else if (loginSubmit.textContent === "Criar") {
    // lógica de criação de conta
    let nomeDaConta = loginDados.value;
    let senhaDaConta = loginSenha.value;
    localStorage.setItem("nome", nomeDaConta);
    localStorage.setItem("senha", senhaDaConta);
    loginDados.value = "";
    loginSenha.value = "";

    loginTitulo.textContent = "Entrar";
    loginDados.placeholder = "Nome da Conta";
    loginSenha.placeholder = "Senha";
    loginSubmit.textContent = "Entrar";
  }
});
