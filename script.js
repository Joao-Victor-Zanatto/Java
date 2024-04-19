// Função para fazer uma mensagem de 'Olá Mundo'
function add_ola_mundo() {
    console.log("Função add_ola_mundo chamada.");
    document.getElementById("texto1").innerText = "Olá Mundo";
}

// Função para fazer uma saída de soma de 2 inteiros
function gerar_calc() {
    console.log("Função gerar_calc chamada.");
    var num1 = parseInt(document.getElementById("num1_att2").value);
    var num2 = parseInt(document.getElementById("num2_att2").value);
    var resultado = num1 + num2;
    document.getElementById("res_att2").innerText = "O resultado é: " + resultado;
}

// Função para alterar a propriedade de um elemento por id
function alt_id() {
    console.log("Função alt_id chamada.");
    var elemento = document.querySelector("#alterarPorId");
    elemento.innerText = "Propriedade alterada por id!";
    elemento.classList.add("highlight"); // Adiciona classe para destaque opcional
}

// Função para alterar a propriedade de um elemento por name
function alt_name() {
    console.log("Função alt_name chamada.");
    var elementos = document.getElementsByName("alterarPorName");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = "Propriedade alterada por name!";
        elementos[i].classList.add("highlight"); // Adiciona classe para destaque opcional
    }
}

// Função para alterar a propriedade de um elemento por class
function alt_class() {
    console.log("Função alt_class chamada.");
    var elementos = document.getElementsByClassName("alterarPorClass");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = "Propriedade alterada por class!";
        elementos[i].classList.add("highlight"); // Adiciona classe para destaque opcional
    }
}
