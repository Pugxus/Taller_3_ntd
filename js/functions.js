$("#nuevoAgente").click(function () {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var identificacion = $("#identificacion").val(); //capturar el valor del campo con id identificacion
    var correo = $("#correo").val(); //capturar el valor del campo con id correo
    var vhur = $("#vhur").val(); //capturar el valor del campo con id vhur
    var telefono = $("#telefono").val(); //capturar el valor del campo con id telefono
    var vhurAS = $("#vhurAS").val(); //capturar el valor del campo con id vhur del supervisor
    $('#agentes tr:last').after('<tr><td>' + nombre + '</td><td>' + identificacion + '</td><td>' + correo + '</td><td>' + vhur + '</td><td>' + telefono + '</td><td>' + vhurAS + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoAgenteModal').modal('toggle'); //cierra el modal
});
$("#nuevoSuper").click(function () {
    var nombre = $("#nombreS").val(); //capturar el valor del campo con id nombre
    var identificacion = $("#identificacionS").val(); //capturar el valor del campo con id identificacion
    var correo = $("#correoS").val(); //capturar el valor del campo con id correo
    var vhur = $("#vhurS").val(); //capturar el valor del campo con id vhur
    var telefono = $("#telefonoS").val(); //capturar el valor del campo con id telefono
    $('#supervisores tr:last').after('<tr><td>' + nombre + '</td><td>' + identificacion + '</td><td>' + correo + '</td><td>' + vhur + '</td><td>' + telefono + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoSuperModal').modal('toggle'); //cierra el modal
});
