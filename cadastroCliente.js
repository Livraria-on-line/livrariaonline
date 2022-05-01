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