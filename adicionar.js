async function postandoDados(dado, secao) {
  const res = await fetch(
    `https://tjdlbtauuudscnqswkly.supabase.co/rest/v1/${secao}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        apikey: API_KEY,
        authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(dado),
    }
  );
}

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZGxidGF1dXVkc2NucXN3a2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNDg3MDcsImV4cCI6MjAxMTkyNDcwN30.-Lh_8oC0S31gdGpAu0giga1hkPVO65p5GVuhlnF2vTo";

criarForm.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(criarTipo.value);
  if (criarTipo.value === "Filme") {
    let dado = {
      nome: criarNome.value,
      imagem: Math.floor(Math.random() * 10) + 1,
      genero: criarGenero.value,
      elenco: document.querySelector('input[name="elenco"]:checked').value,
    };
    postandoDados(dado, "Filmes");
  } else if (criarTipo.value === "Série") {
    console.log("entrei");
    let dado = {
      nome: criarNome.value,
      imagem: Math.floor(Math.random() * 10) + 1,
      genero: criarGenero.value,
      elenco: document.querySelector('input[name="elenco"]:checked').value,
    };
    postandoDados(dado, "Series");
  }
});
