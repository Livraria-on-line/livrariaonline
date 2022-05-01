var clubes = [
  {
    nome: "Goodbye Sunrise",
    gestor: "R. Withfork",
    qtdIntegrantes: 32,
    leituraAtual: "Northern Spy",
  },
  {
    nome: "Action now",
    gestor: "Michael J.",
    qtdIntegrantes: 30,
    leituraAtual: "To Build a Fire",
  },
];

function adicionaClube(nome, gestor, qtdIntegrantes, leituraAtual){
  clubes.push({
      nome: nome,
      gestor: gestor,
      qtdIntegrantes: qtdIntegrantes,
      leituraAtual: leituraAtual
  })
};

adicionaClube("Meu Clube", "Miguel", 32, "To Build a Fire")

for(let listar of clubes){
console.log(listar.nome)
};