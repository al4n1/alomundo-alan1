function inserirNome(){
    let nomeUsuario = prompt("Qual seu nome");
      let elemento = document.querySelector("#nome-usuario");
      console.log(elemento)
      elemento.textContent = nomeUsuario;
}
const lista = document.querySelector('#lista');

 
lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
    mome:'Alan',
    idade:'17',
    anoLetivo:'Ensino Medio',
    materiasFavoritas: ['educaçãoFisica','programação','arte']
}
    console. log(aluno1.nome);
    console. log(aluno1.idade);
    console. log(aluno1.materiaFavoritas);
    console. log(aluno1.materiaFavoritas[1]);