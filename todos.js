const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZGxidGF1dXVkc2NucXN3a2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNDg3MDcsImV4cCI6MjAxMTkyNDcwN30.-Lh_8oC0S31gdGpAu0giga1hkPVO65p5GVuhlnF2vTo";

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
    // console.log(data[i]);
    let lancamento = data[i].lancamento;
    let nome = data[i].nome;
    let imagem = data[i].imagem;
    let genero = data[i].genero;
    let elenco = data[i].elenco;

    let divCard = document.createElement("div");
    divCard.className = "card";
    sectionTodos.appendChild(divCard);
    divCard.style.backgroundImage = `url(./imagens/filmes/${elenco}/${imagem}.jpg)`;
  }
}

buscandoDados();

// async function postandoDados(dado) {
//   const res = await fetch(
//     "https://fkctewyktlbpdexyqsum.supabase.co/rest/v1/Dados",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Prefer: "return=minimal",
//         apikey: ApiKey,
//         authorization: `Bearer ${ApiKey}`,
//       },
//       body: JSON.stringify(dado),
//     }
//   );
// }

// let dado = {
//   Nome: "Samuel",
//   Peso: 56,
// };

// postandoDados(dado);
