const titulo = document.getElementsByName('hello')[0];
const buttonHello = document.getElementById('buttonHello');
const paragrafo = document.querySelector('.parag');

buttonHello.addEventListener('click', function() {
    alert('Hello World');
    n1 = Number(prompt('Digite um número:'));
    n2 = Number(prompt('Digite um número:'));
    soma = n1 + n2;

    titulo.innerHTML = `A soma de ${n1} + ${n2} é igual a ${soma}`;
    paragrafo.style.color = 'red';
});