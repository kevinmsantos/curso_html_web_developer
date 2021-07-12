let x = parseFloat(prompt("Digite um número:").replace(",", "."));

if(x % 2 == 0){
    for (let num = 0; num <= x; num+=2){
        console.log(num);
    }
}else{
    console.log("Numero digitado não é par: " + x);
}