let x = parseInt(prompt("Digite a quantidade de quilometros percorridos: "));
let y = parseFloat(prompt("Digite a quantidade de combustivel consumido: ").replace(",", "."));

let r = x / y;

console.log(r.toFixed(3) + "km/l");