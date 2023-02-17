function obtener(){
    const contactos = document.getElementById("contactos");
fetch("http://www.raydelto.org/agenda.php").then(function(datos){
    return datos.json();
}).then(function(datos){
    datos.forEach(function (contactos1){
        contactos.innerHTML += contactos1.nombre + " " + contactos1.apellido + " " +
        contactos1.telefono + "<br/>";
    })
})

}

function mostrar(nombre, apellido, telefono){
    const contactos = document.getElementById("contactos");
    contactos.innerHTML += nombre + " " + apellido + " " + telefono + "<br/>";
}

function agregar (){
    var txtNombre = document.getElementById("txtNombre");
    var txtApellido = document.getElementById("txtApellido");
    var txtTelefono = document.getElementById("txtTelefono");
    const contactos1 = {nombre : txtNombre.value, apellido : txtApellido, telefono : txtTelefono }; 
    fetch("http://www.raydelto.org/agenda.php",
    {
        method: 'POST',
        body: JSON.stringify(contactos1)
    }
    );

    mostrar(txtNombre.value, txtApellido.value, txtTelefono.value);

}