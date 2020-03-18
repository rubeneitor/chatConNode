var socket = io.connect("http://localhost:8080", {'forceNew': true});

//aqui recibe el mensaje 
socket.on("messages", function (data) {
    console.log(data)
    render(data);
});

//renderiza los mensajes enviados: map para que por cada elemento del array saque por pantalla el mensaje enviado
//con el autor
function render(data) {
    var html = data.map(function (elem, index) {
        return (`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.texto}</em>
            </div>`)
    }).join(" ");

    var mensaje = document.getElementById('messages');
    mensaje.innerHTML = html;

}

function addMessage(evento) {
    var mensajeCliente = {
        author: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };

    socket.emit('new-message', mensajeCliente);
    return false;
}