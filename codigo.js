/*
//declaração de variaveis
let anoNascimento;
let anoAtual;
let resultado;
let idadeCachorro;
let nome;
let qualCalculo;

//entrada de dados pelo usuário
nome = prompt("Qual seu nome?");
anoNascimento = parseInt(prompt("Qual o ano de nascimento"));
anoAtual = parseInt(prompt("Qual o ano atual?"));

//primeiro desafio
resultado = anoAtual - anoNascimento;

//segundo desafio
idadeCachorro = resultado * 7;


//terceiro desafio (mostrar o nome do usario)

//quarto desafio (perguntar qual cálculo o usuário quer)
qualCalculo = parseInt(prompt("digite 1 para a idade humana e 2 pra idade canina"));

//mostrar o resultado 
if (qualCalculo == 1) {
    alert(nome + ", a idade é: " + resultado);
    console.log(nome);
}
else if (qualCalculo == 2) {
    alert(nome + ", a idade em anos caninos é: " + idadeCachorro);
} else {
    alert(nome + ", por favor digite um número válido.");
}
*/
//DESAFIO ULTIMATO//
 
//fazer uma calculadora que verifica quantos pontos um estudante
//precisa para passar de ano no ultimo trimestre

//dica: o estudante precisa informar as suas notas do primeiro e segundo trimestre 
//com esses dados ,a calculadora precisa informar quantos pontos ele precisa para passar 
//de ano no terceiro trimestre.se o estudante ja estiver aprovado no segundo trimestre ,
//mandar uma mensagem de parabens 


//ultilizar como media valor 6.0 pontos 


let nota1;
let nota2;
let resultado;

nota1 = prompt("qual sua nota do primeiro trimestre");
nota2 = prompt("qual sua nota do segundo trimestre");

resultado = 180 - (nota1+nota2)
  
if(resultado >= 60){
    alert("ainda precisa de " + resultado + "para passar");
} else {alert("parabens você ja esta aprovado")}
