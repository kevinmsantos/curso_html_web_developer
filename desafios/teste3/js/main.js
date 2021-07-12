numero = Array(5);

numero[0] = -5;
numero[1] = 0;
numero[2] = -3;
numero[3] = -4;
numero[4] = 12;

function validarPares(value){
  return value % 2 == 0;
}

function validarImpares(value){
    return value % 2 != 0;
  }

function validarPositivo(value){
    return value > 0;
  }

function validarNegativos(value){
    return value < 0;
  }


pares = numero.filter(validarPares);
impares = numero.filter(validarImpares);

positivos = numero.filter(validarPositivo);
negativos = numero.filter(validarNegativos);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");