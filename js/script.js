// Referências do DOM - HTML





// Lógica do projeto - Revisão
let vet = [23, 34, 65, 63, 45, 54, 74, 23, 56, 27, 93, 94, 76];
let num;
let obj = {
    nome:'João da silva',
    email:'joao@gmail.com',
    idade:53
 };

 // Desestruturação de dados em objetos

let {nome, email, idade } = obj;
console.log(nome, email, idade);

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




