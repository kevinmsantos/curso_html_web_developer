let valor = parseInt(prompt("Digite o valor:"));
let notas = [100,50,20,10,5,2,1];

console.log(valor);

for(i = 0; i < notas.length; i++){

    let quantidade = parseInt(valor / notas[i]);

    console.log(quantidade + " nota(s) de R$ " + notas[i] + ",00");

    valor = valor - (quantidade*notas[i]);
  
}