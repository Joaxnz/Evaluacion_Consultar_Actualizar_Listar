var EstudianteList = [];


function addUsuarioToSystem(pid, pnombre, ppais, pnacimiento, pemail){

    var EstudianteListt = {
        id : pid,
        nombre : pnombre,
        pais : ppais,
        nacimiento : pnacimiento,
        email : pemail
    };
    console .log(EstudianteListt);
    UsuarioList.push(EstudianteListt);
}

function getUsuarioList(){
    return EstudianteList;
}