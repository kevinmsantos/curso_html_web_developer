
//javascript possui tipagem dinamica, não é necessário definir o tipo da variavel na criacao.
var nome = "Kevin Monteiro";
var idade = 24;
var idade2 = 10;
var idade_string = "24";
var idade2_string = "10";
var frase = "Japão é o melhor time do mundo!";
//alert("Meu Segundo JS!");
//alert(nome + " tem " + idade + " anos."); //concatena texto e variaveis string e inteiro
//alert(idade + idade2); //soma as variaveis
//alert(idade_string + idade2_string); //concatena
console.log(nome); //imprimido conteudo no console
console.log(idade + idade2); //somando conteudo e imprimindo no console
console.log(frase.replace("Japão", "Brasil")); // alterando string e imprimindo no console
console.log(frase.toUpperCase()); //imprimindo conteudo string no console todo em maiusculo(capitelizado)
console.log(frase.toLowerCase()); //imprimindo conteudo string no console todo minusculo(descapitalizado)
alert(frase.replace("Japão", "Brasil")); //alterando conteudo string e enviado alerta na pagina do navegador