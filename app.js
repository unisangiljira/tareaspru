function crearTarea() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    const tableBody = document.getElementById('tableBody');
    const nuevaFila = tableBody.insertRow();

    nuevaFila.insertCell(0).textContent = titulo;
    nuevaFila.insertCell(1).textContent = descripcion;
    nuevaFila.insertCell(2).textContent = fecha;
    nuevaFila.insertCell(3).textContent = "Pendiente";

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = "Completar";
    botonCompletar.onclick = function() {
        completarTarea(nuevaFila);
    };
    nuevaFila.insertCell(4).appendChild(botonCompletar);

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        eliminarTarea(nuevaFila);
    };
    nuevaFila.insertCell(5).appendChild(botonEliminar);
    limpiarForm();
}

function eliminarTarea(fila) {
    fila.remove();
}

function completarTarea(fila) {
    fila.cells[3].textContent = "Completada";
    fila.cells[4].querySelector('button').disabled = true
}



function limpiarForm() {
    document.getElementById('titulo').value = "";
    document.getElementById('descripcion').value = "";
    document.getElementById('fecha').value = "";
}
