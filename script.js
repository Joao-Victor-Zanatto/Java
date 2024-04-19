function add_ola_mundo() {
    document.getElementById("texto1").innerText = "Olá Mundo";
}

function calcular() {
    var num1 = parseInt(document.getElementById("num1_att2").value);
    var num2 = parseInt(document.getElementById("num2_att2").value);
    var resultado = num1 + num2;
    document.getElementById("res_att2").innerText = "O resultado é: " + resultado;
}

function alt_id() {
    document.getElementById("alterarPorId").style.color = "red";
    document.getElementById("alterarPorId").innerText = "Propriedade alterada por id!";
}

function alt_name() {
    var elements = document.getElementsByName("alterarPorName");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontWeight = "bold";
        elements[i].innerHTML = "Propriedade alterada por name!";
    }
}

function alt_class() {
    var elements = document.getElementsByClassName("alterarPorClass");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontStyle = "italic";
        elements[i].innerHTML = "Propriedade alterada por class!";
    }
}
