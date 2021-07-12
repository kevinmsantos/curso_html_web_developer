let total = 0;
let i = 0;
let valor;

while (i <= 5){
    valor = parseFloat(prompt("Digite um número:"));
    
    if(valor > 0){
        
        total++;
    }

    i++;
}

console.log(total + " valores positivos");