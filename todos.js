const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZGxidGF1dXVkc2NucXN3a2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNDg3MDcsImV4cCI6MjAxMTkyNDcwN30.-Lh_8oC0S31gdGpAu0giga1hkPVO65p5GVuhlnF2vTo";

async function deletar(id, secao) {
  const response = await fetch(
    `https://tjdlbtauuudscnqswkly.supabase.co/rest/v1/${secao}?id=eq.${id}`,
    {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
}

async function atualizarDados(dados, secao, id) {
  const res = await fetch(
    `https://tjdlbtauuudscnqswkly.supabase.co/rest/v1/${secao}?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        apikey: API_KEY,
        authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(dados),
    }
  );
}

async function buscandoDados() {
  const res = await fetch(
    "https://tjdlbtauuudscnqswkly.supabase.co/rest/v1/Filmes",
    {
      method: "GET",
      headers: {
        apikey: API_KEY,
        authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    let lancamento = data[i].lancamento;
    let dataComum = new Date(lancamento);
    const dia = dataComum.getDate().toString().padStart(2, "0");
    const mes = (dataComum.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataComum.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    let nome = data[i].nome;
    let imagem = data[i].imagem;
    let genero = data[i].genero;
    let elenco = data[i].elenco;
    let tipo = "Filme";

    let boxDetalhes = document.createElement("div");
    boxDetalhes.className = "boxDetalhes";
    sectionTodos.appendChild(boxDetalhes);
    boxDetalhes.style.display = "none";

    let botoesJanela = document.createElement("div");
    botoesJanela.className = "botoesJanela";
    boxDetalhes.appendChild(botoesJanela);

    let botao1 = document.createElement("button");
    botoesJanela.appendChild(botao1);

    let img1 = document.createElement("img");
    img1.src = "./imagens/botoes/minimizar.png";
    botao1.appendChild(img1);

    let botao2 = document.createElement("button");
    botoesJanela.appendChild(botao2);

    let img2 = document.createElement("img");
    img2.src = "./imagens/botoes/maximize.png";
    botao2.appendChild(img2);

    let botao3 = document.createElement("button");
    botoesJanela.appendChild(botao3);

    let img3 = document.createElement("img");
    img3.src = "./imagens/botoes/close.png";
    botao3.appendChild(img3);
    botao3.addEventListener("click", () => {
      boxDetalhes.style.display = "none";
    });

    let img = document.createElement("img");
    img.src = `./imagens/filmes/${elenco}/${imagem}.jpg`;
    boxDetalhes.appendChild(img);

    let h1 = document.createElement("h1");
    h1.textContent = nome;
    boxDetalhes.appendChild(h1);

    let p1 = document.createElement("p");
    p1.textContent = `Lançamento: ${dataFormatada}`;
    boxDetalhes.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Gênero: ${genero}`;
    boxDetalhes.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `Elenco: ${elenco}`;
    boxDetalhes.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = `Tipo: ${tipo}`;
    boxDetalhes.appendChild(p4);

    let divCard = document.createElement("div");
    divCard.className = "card";
    sectionTodos.appendChild(divCard);
    divCard.style.backgroundImage = `url(./imagens/filmes/${elenco}/${imagem}.jpg)`;
    divCard.addEventListener("click", () => {
      boxDetalhes.style.display = "flex";
    });

    let lixeira = document.createElement("button");
    boxDetalhes.appendChild(lixeira);
    lixeira.className = "lixeira";
    lixeira.addEventListener("click", () => {
      let resposta = prompt(
        "Tem certeza que deseja excluir este clássico? Por favor responda sim ou não"
      );
      if (resposta === "sim") {
        divCard.remove();
        boxDetalhes.remove();
        deletar(data[i].id, "Filmes");
      } else if (resposta === "não") {
      } else {
        alert("Resposta inválida");
      }
    });

    let img4 = document.createElement("img");
    img4.src = "./imagens/botoes/lixeira.png";
    lixeira.appendChild(img4);

    let atualizar = document.createElement("button");
    boxDetalhes.appendChild(atualizar);
    atualizar.className = "atualizarBtn";
    let img5 = document.createElement("img");
    img5.src = "./imagens/botoes/atualizar.png";
    atualizar.appendChild(img5);

    atualizar.addEventListener("click", () => {
      let nomeNovo = prompt("Para qual nome você quer mudar?");
      let generoNovo = prompt("E qual o gênero?");

      let dadosAtualizados = {
        nome: nomeNovo,
        genero: generoNovo,
        imagem: data[i].imagem,
        elenco: data[i].elenco,
      };

      atualizarDados(dadosAtualizados, "Filmes", data[i].id);
    });
  }
}

async function buscandoDadosSeries() {
  const res = await fetch(
    "https://tjdlbtauuudscnqswkly.supabase.co/rest/v1/Series",
    {
      method: "GET",
      headers: {
        apikey: API_KEY,
        authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    let lancamento = data[i].lancamento;
    let dataComum = new Date(lancamento);
    const dia = dataComum.getDate().toString().padStart(2, "0");
    const mes = (dataComum.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataComum.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    let nome = data[i].nome;
    let imagem = data[i].imagem;
    let genero = data[i].genero;
    let elenco = data[i].elenco;
    let tipo = "Série";

    let boxDetalhes = document.createElement("div");
    boxDetalhes.className = "boxDetalhes";
    sectionTodos.appendChild(boxDetalhes);
    boxDetalhes.style.display = "none";

    let botoesJanela = document.createElement("div");
    botoesJanela.className = "botoesJanela";
    boxDetalhes.appendChild(botoesJanela);

    let botao1 = document.createElement("button");
    botoesJanela.appendChild(botao1);

    let img1 = document.createElement("img");
    img1.src = "./imagens/botoes/minimizar.png";
    botao1.appendChild(img1);

    let botao2 = document.createElement("button");
    botoesJanela.appendChild(botao2);

    let img2 = document.createElement("img");
    img2.src = "./imagens/botoes/maximize.png";
    botao2.appendChild(img2);

    let botao3 = document.createElement("button");
    botoesJanela.appendChild(botao3);

    let img3 = document.createElement("img");
    img3.src = "./imagens/botoes/close.png";
    botao3.appendChild(img3);
    botao3.addEventListener("click", () => {
      boxDetalhes.style.display = "none";
    });

    let img = document.createElement("img");
    img.src = `./imagens/filmes/${elenco}/${imagem}.jpg`;
    boxDetalhes.appendChild(img);

    let h1 = document.createElement("h1");
    h1.textContent = nome;
    boxDetalhes.appendChild(h1);

    let p1 = document.createElement("p");
    p1.textContent = `Lançamento: ${dataFormatada}`;
    boxDetalhes.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Gênero: ${genero}`;
    boxDetalhes.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `Elenco: ${elenco}`;
    boxDetalhes.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = `Tipo: ${tipo}`;
    boxDetalhes.appendChild(p4);

    let divCard = document.createElement("div");
    divCard.className = "card";
    sectionTodos.appendChild(divCard);
    divCard.style.backgroundImage = `url(./imagens/filmes/${elenco}/${imagem}.jpg)`;
    divCard.addEventListener("click", () => {
      boxDetalhes.style.display = "flex";
    });
    let lixeira = document.createElement("button");
    boxDetalhes.appendChild(lixeira);
    lixeira.className = "lixeira";
    lixeira.addEventListener("click", () => {
      let resposta = prompt(
        "Tem certeza que deseja excluir este clássico? Por favor responda sim ou não"
      );
      if (resposta === "sim") {
        divCard.remove();
        boxDetalhes.remove();
        deletar(data[i].id, "Series");
      } else if (resposta === "não") {
      } else {
        alert("Resposta inválida");
      }
    });

    let img4 = document.createElement("img");
    img4.src = "./imagens/botoes/lixeira.png";
    lixeira.appendChild(img4);

    let atualizar = document.createElement("button");
    boxDetalhes.appendChild(atualizar);
    atualizar.className = "atualizarBtn";
    let img5 = document.createElement("img");
    img5.src = "./imagens/botoes/atualizar.png";
    atualizar.appendChild(img5);

    atualizar.addEventListener("click", () => {
      let nomeNovo = prompt("Para qual nome você quer mudar?");
      let generoNovo = prompt("E qual o gênero?");

      let dadosAtualizados = {
        nome: nomeNovo,
        genero: generoNovo,
        imagem: data[i].imagem,
        elenco: data[i].elenco,
      };

      atualizarDados(dadosAtualizados, "Series", data[i].id);
    });
  }
}

buscandoDados();
buscandoDadosSeries();
