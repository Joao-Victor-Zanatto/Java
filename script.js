function add_ola_mundo() {
    document.getElementById("texto1").innerText = "Olá Mundo";
}

function gerar_calc() {
    var num1 = parseInt(document.getElementById("num1_att2").value);
    var num2 = parseInt(document.getElementById("num2_att2").value);
    var resultado = num1 + num2;
    document.getElementById("res_att2").innerText = "O resultado é: " + resultado;
}

function alt_id() {
    var elemento = document.querySelector("#alterarPorId");
    elemento.innerText = "Propriedade alterada por id!";
    elemento.classList.add("highlight"); // Adiciona classe para destaque opcional
}

function alt_name() {
    var elementos = document.getElementsByName("alterarPorName");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = "Propriedade alterada por name!";
        elementos[i].classList.add("highlight"); // Adiciona classe para destaque opcional
    }
}

function alt_class() {
    var elementos = document.getElementsByClassName("alterarPorClass");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = "Propriedade alterada por class!";
        elementos[i].classList.add("highlight"); // Adiciona classe para destaque opcional
    }
}
