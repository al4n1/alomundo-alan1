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
       console. log(aluno1.materiasFavoritas);   
        console. log(aluno1.materiasFavoritas[1]);

        const.objeto = document.querySelector('#aluno');
         objeto.contextContent = aluno1.nome;
         objeto.contextContent = aluno1.idade;
         objeto.contextContent = aluno1.aluno1.materiasFavoritas[1];