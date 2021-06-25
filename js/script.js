// Referências do DOM - HTML

const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');




// Lógica do projeto - Revisão
let vet = [23, 34, 65, 63, 45, 54, 74, 23, 56, 27, 93, 94, 76];
let num;
let obj = {
    nome:'João da silva',
    email:'joao@gmail.com',
    idade:53
 };
 
// Exemplo da função filter
let vet2 = vet.filter(item => item > 50);

console.log(vet2);

// 1 tipo de função
function nome(){
    console.log('Teste de função');
};
nome();

// 2 tipo de função (função anômima )
btnA.onclick = function (){
    console.log('Teste de função anônima');
};

// 3 tipo de função (Arrow function)
btnB.onclick = ()=>{
    console.log('Teste de Arrow function');
};



/*

// Desestruturação de dados em objetos

let {nome, email, idade } = obj;
//console.log(nome, email, idade);

// Template string
console.log(`A idade = ${idade} do usuário ${nome}`);

console.log('A idade = ', idade, 'do usuário', nome);
*/


 /*
let nome = obj.nome;
console.log(nome);
let email = obj.email;
let idade = obj.idade;
console.log(email, idade);
*/


// Desestruturação de dados em vetores
//let [numA, , numB, numC, ...resto] = vet;
//console.log(numA, numB, numC);
//console.log(resto);

/*
num = vet[0];
console.log(num);

numA = vet[0];
numB = vet[1];
numC = vet[2];

console.log(numA, numB, numC);
*/

