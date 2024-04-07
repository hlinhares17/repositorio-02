function pagina02() {
    window.location.href = "/paginas/index2.html";
}

document.getElementById("textoTe").addEventListener("click", function() {
    var destino = document.getElementById("texto1");
    destino.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("textoAmo").addEventListener("click", function() {
    var destino = document.getElementById("texto02");
    destino.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("textoGyu").addEventListener("click", function() {
    var destino = document.getElementById("texto03");
    destino.scrollIntoView({ behavior: 'smooth' });
});


