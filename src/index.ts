// ==========================================================  Exercício 1
// function checaTriangulo(a: number, b: number, c: number) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//   console.log(checaTriangulo(2, 5, 1))




// ==========================================================  Exercício 2
//   function imprimeTresCoresFavoritas(): void {
//     const cor1: string = prompt("Insira sua primeira cor favorita")
//     const cor2: string = prompt("Insira sua segunda cor favorita")
//     const cor3: string = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }
//  console.log(imprimeTresCoresFavoritas())




// ==========================================================  Exercício 3
// const checaAnoBissexto = (ano: number) => {
//   const cond1: boolean = ano % 400 === 0
//   const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//   return cond1 || cond2
// }
// console.log(checaAnoBissexto(2016))




// ==========================================================  Exercício 4
// function comparaDoisNumeros(num1: number, num2: number) {
//   let maiorNumero: number;
//   let menorNumero: number;

//   if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//   } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//   }

//   const diferenca: number = maiorNumero - menorNumero;

//   return diferenca 
// }
// console.log(comparaDoisNumeros( 7, 4))




// ==========================================================  Exercício 5
// const  checaRenovacaoRG = (anoAtual: number, anoNascimento: number, anoEmissao: number ) => {
//   let idade: number = anoAtual - anoNascimento
//   let tempoCarteira: number = anoAtual - anoEmissao
 
//    if(idade <= 20 ) {
//        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
//     }else if(idade >= 20 || idade <= 50) {
//        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
//     }else if(idade > 50) {
//        return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
//      }else {
//          return "error"
//      }
//  }
//  console.log(checaRenovacaoRG(2023, 1992, 2015))




// ==========================================================  Exercício 6
// const twoNumbers = (num1: number, num2: number) => {
//   const sum: number = num1 + num2
//   const min: number = num1 - num2
//   const tim: number = num1 * num2
//   let biggerThan: string 
  

//   if (num1 > num2) {
//     biggerThan = `O maior número é: ${num1}` 
//   } else {
//     biggerThan = `O maior número é: ${num2}`
//   }
//   return[sum, min, tim, biggerThan]
// }
// console.log(twoNumbers( 9 , 8))




// ==========================================================  Exercício 7
// const replaceDna = (dna: string) => {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       rna += "U";
//     } else if (dna[i] === "T") {
//       rna += "A";
//     } else if (dna[i] === "C") {
//       rna += "G";
//     } else if (dna[i] === "G") {
//       rna += "C";
//     }
//   }
//   return rna;
// }
// console.log(replaceDna("ATT GCT GCG CAT TAA CGA CGC GTA"))




// ==========================================================  Aprofundamento - Exercício 1
// type person = {name: string, age: number, favouriteColor: string} 

// enum Colors {
//     AKIRA = "white",
//     MORGANA = "black",
//     BENTO = "black and white"
// }

// const name1: person = {
//     name: "Akira",
//     age: 3,
//     favouriteColor: Colors.AKIRA
// }

// const name2: person = {
//     name: "Morgana",
//     age: 3,
//     favouriteColor: Colors.MORGANA
// }

// const name3: person = {
//     name: "Bento",
//     age: 3,
//     favouriteColor: Colors.BENTO
// }
// console.table([name1, name2, name3])




// ==========================================================  Aprofundamento - Exercício 2
