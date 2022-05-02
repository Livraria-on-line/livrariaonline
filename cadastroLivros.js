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