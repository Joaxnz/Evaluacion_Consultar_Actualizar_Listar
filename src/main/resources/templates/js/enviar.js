$(document).ready(function(){

    $("#btnListarEstudiante").on('click', function() {

        let tabla = document.querySelector('#EstudianteTabla tbody');
        tabla.innerHTML= '';
        $.ajax({
            url:"http://localhost:8080/listarEstudiante",
            type: "GET",
            datatype:"JSON",
            success:function(respuesta){
                for(var i = 0; i < respuesta.length; i++){
                    var row = tabla.insertRow(i),
                    idCodigo = row.insertCell(0),
                    NombreCell = row.insertCell(1),
                    ApellidosCell = row.insertCell(2),
                    CursoCell = row.insertCell(3),
                    MateriasCell = row.insertCell(4),
                    NotasCell = row.insertCell(5),
                    JuicioCell = row.insertCell(6)
            
                    idCodigo.innerHTML = respuesta[i].codigo;
                    NombreCell.innerHTML = respuesta[i].nombre;
                    ApellidosCell.innerHTML = respuesta[i].apellidos;
                    CursoCell.innerHTML = respuesta[i].curso;
                    MateriasCell.innerHTML = respuesta[i].materias;  
                    NotasCell.innerHTML = respuesta[i].notas;
                    JuicioCell.innerHTML = respuesta[i].juicio;
                    tabla.appendChild(row);
                }

            }
        });

    });

    $("#btnAgregarEstudiante").click(function () {
        var codigo = $("#txtCodigo").val();
        var nombre = $("#txtNombre").val();
        var apellidos = $("#txtApellido").val();
        var curso = $("#txtCurso").val();
        var materias = $("#txtMateria1").val();
        var materias = $("txtMateria2").val();
        var materias = $("txtMateria3").val();
        var notas = $("#txtNota1").val();
        var notas = $("#txtNota2").val();
        var notas = $("#txtNota3").val();
        var juicio = $('txtJuicio').val();
        
        // Validar campos
        if (codigo === "" || nombre === "" || apellidos === "" || curso === "" || materias === ""  || notas === "" || juicio === "" ) {
          alert("Por favor complete todos los campos");
          return;
        }
        
        // Crear objeto de usuario
        var estudiante = {
          codigo: codigo,
          nombre: nombre,
          apellidos: apellidos,
          curso: curso,
          materias: materias,
          notas: notas,
          juicio: juicio
        };
        
        // Enviar petición POST al servidor
        $.ajax({
          url: "http://localhost:8080/AgregarEstudiante",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(estudiante),
          success: function (data) {
            alert("Estudiante agregado correctamente");
            // Limpiar campos
            $("#txtCodigo").val("");
            $("#txtNombre").val("");
            $("#txtApellido").val("");
            $("#txtCurso").val("");
            $("#txtMateria1").val("");
            $("#txtMateria2").val("");
            $("#txtMateria3").val("");
            $("#txtNota1").val("");
            $("#txtNota2").val("");
            $("#txtNota3").val("");
            $("txtJuicio").val("");
          },
          error: function (xhr, status, error) {
            alert("Error al agregar Estudiante");
          }
        });
      });


$("#btnBuscarEstudiante").click(function() {
    var id = $("#txtCodigoo").val();
    buscarEstudiante(id);
});

function buscarEstudiante(id) {
  $.ajax({
      url: "http://localhost:8080/buscarEstudiante/" + id,
      type: "GET",
      success: function(estudiante) {
          $("#EstudianteTabla tbody").empty();

          var row = $("<tr>");
          row.append($("<td>").text(estudiante.codigo));
          row.append($("<td>").text(estudiante.nombre));
          row.append($("<td>").text(estudiante.apellidos));
          row.append($("<td>").text(estudiante.curso));
          row.append($("<td>").text(estudiante.materias));
          row.append($("<td>").text(estudiante.notas));
          row.append($("<td>").text(estudiante.juicio));
          $("#EstudianteTabla tbody").append(row);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert("No se encontró ningún Estudiante en este curso");
      }
  });
}

$("#EditbtnBuscarEstudiante").click(function() {
  var cod = $("#EdittxtCodigoo").val();
  buscarEstudiante(cod);
});




function Traerdatos(respuesta){
  document.querySelector('#EdittxtCodigo').setAttribute('value', respuesta['codigo']),
  document.querySelector('#EdittxtNombre').setAttribute('value', respuesta['nombre']),
  document.querySelector('#EdittxtApellido').setAttribute('value', respuesta['apellidos']),
  document.querySelector('#EdittxtCurso').setAttribute('value', respuesta['curso']),
  document.querySelector('#EdittxtMateria1').setAttribute('value', respuesta.materias[0]),
  document.querySelector('#EdittxtMateria2').setAttribute('value', respuesta.materias[1]),
  document.querySelector('#EdittxtMateria3').setAttribute('value', respuesta.materias[2]),
  document.querySelector('#EdittxtNota1').setAttribute('value', respuesta.notas[0]),
  document.querySelector('#EdittxtNota2').setAttribute('value', respuesta.notas[1]),
  document.querySelector('#EdittxtNota3').setAttribute('value', respuesta.notas[2]),
  document.querySelector('#EdittxtJuicio').setAttribute('value', respuesta['juicio']);
}

$('#EditbtnBuscarEstudiante').on('click', function(){
  let cod = parseInt($('#EdittxtCodigoo').val());
  $.ajax({
      url:"http://localhost:8080/buscarEstudiante/" + cod,
      type: "GET",
      datatype: JSON,
      success: function(respuesta){            
          console.log(respuesta);
          Traerdatos(respuesta)
      }
  })
});

$('#btnActalizar').on('click', function(){

  let datos= {
      codigo:parseInt($('#EdittxtCodigo').val()),
      nombre:$('#EdittxtNombre').val(),
      apellidos:$('#EdittxtApellido').val(),
      curso:$('#EdittxtCurso').val(),
      materias: [$('#EdittxtMateria1').val(), $('#EdittxtMateria2').val(), $('#EdittxtMateria3').val()],
      notas: [parseInt($('#EdittxtNota1').val()), parseInt($('#EdittxtNota2').val()), parseInt($('#EdittxtNota3').val())],
      juicio:$('#EdittxtJuicio').val()
  }

  let datosEnviados= JSON.stringify(datos);
  $.ajax({
      url:"http://localhost:8080/ActualizarEstudiante/",
      type: 'PUT',
      data: datosEnviados,
      contentType: "application/json",
      datatype: 'JSON',
      success: function(respuesta){ 
        console.log(respuesta);          
          alert(respuesta);            
      }
  })
});


});