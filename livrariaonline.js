//==================================1
console.log("1 - Cadastro de livros - Renato Dardengo")
console.log(" ")
//1. Cadastro de livro
var livros = [
    {
      titulo: "Tender Is the Flesh",
      preco: 53.85,
      autor: "Agustina Bazterrica",
      editora: "Scribner",
      ehTraducao: true,
    },
    {
      titulo: "A máquina do tempo",
      preco: 13.54,
      autor: "H. G. Wells",
      editora: "L&PM Pocket",
      ehTraducao: true,
    },
    {
      titulo: "salt. ",
      preco: 118.54,
      autor: "nayyirah waheed",
      editora: null,
      ehTraducao: false,
    },
  ];
  
  function adicionarLivro (titulo, preco,autor, editora, ehTraducao){
    let livro= {
         titulo:titulo,
         preco:preco,
         autor:autor,
         editora:editora,
         ehTraducao:ehTraducao
  
    }
  
   livros.push (livro)
  }
  
  adicionarLivro ("JavaScript: O Guia Definitivo", 160, "David Flanagan", "BookMan Editora Ltda", true)
  console.log(livros) 

 //==================================2
console.log(" ")
console.log("2- Cadastro de clubes - Marcel de Sousa")
console.log(" ")

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

//==================================4
console.log(" ")
console.log("4- Cadastro de cliente - Victor Hugo")
console.log(" ")

  var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];

  function listar(id,nome,sobreNome,idade,contato){
    var novosClientes = {
        id : id,
        nome : nome,
        sobreNome: sobreNome,
        idade : idade,
        contato: contato
      }
      clientes.push(novosClientes)
      
}
    
console.log(listar(3,"victor","hugo",22,190))
console.log(clientes)

//==================================5
console.log(" ")
console.log("5- Listar clientes entre duas idades - Caio Nunez")
console.log(" ")

  var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];
  
  function filtraIdade (IdadeInicial, IdadeFinal){
    const clientesPorIdade = clientes.filter((clientes) => {
      if (clientes.idade >= IdadeInicial && clientes.idade <= IdadeFinal) 
      return true
    })
    return clientesPorIdade
  }
  
  let resultado = filtraIdade(30,80)
  console.log(resultado)