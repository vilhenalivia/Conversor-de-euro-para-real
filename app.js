var valorEmEuro = prompt('Informe o valor em euro que voce quer converter para real');
var cotacaoDoEuro = 5.55;
var valorEmReal = valorEmEuro * cotacaoDoEuro;

valorEmReal = valorEmReal.toFixed(2);

alert('O valor em real e R$' + valorEmReal)
