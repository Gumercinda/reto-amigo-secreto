// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo () {
    const inputAmigo = document.getElementById("amigo").value;
    const nombreAmigo = inputAmigo.value.trim();

if (nombreAmigo === ""){
    alert("Inserta un nombre");
    return;

}
    amigo.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();


}

function actualizarLista (){

    const listaAmigosUl = document.getElementById("listaAmigos")
    listaAmigosUl.innerHTML = "";
    amigo.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
    }

    function sortearAmigo() {
        if (amigo.length === 0) {
            alert("No hay amigos para sortear, agregar nombres");
            return
        }

        const indiceAleatorio = Math.floor(Math.random() * amigo.length);
        const amigoSorteado = amigo[indiceAleatorio];
        const resultadoUl = document.getElementById("resultado");
        resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

    document.addEventListener('DOMContentloaded', () => {
        document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
        document.getElementById("btnSortear").addEventListener("click", sortearAmigo)

    })
}
