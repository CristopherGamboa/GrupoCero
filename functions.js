function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "contacto@grupocero.cl" && clave == "grupocero") {
        alert("E-mail y contraseña válidos. ¡Bienvenido!")
        location.href = 'index.html';
    } else {
        alert("¡Credenciales erróneas!");
    }
    return false;
}

function buscar_obra() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('obras');

    for (i = 0; i < x.length; i++) {
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
