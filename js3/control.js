document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let pass = document.getElementById('pass').value;

    if(usuario.length == 0 && pass.length == 0){
        alert('Debes proporcionar un usuario y una clave')
        return
    }
    if (usuario.length == 0) {
        alert('Debes proporcionar un usuario');
        return
    }
    if (pass.length == 0){
        alert('Debes proporcionar una clave')
        return
    }
    
    let letras="@";
        function tiene_letras(texto){
        for(i=0; i<texto.length; i++){
            if (letras==texto.charAt(i)){
                return 1;
            }
        }
        return 0;
        }
        if (tiene_letras(usuario) == 0) {
            alert('El usuario no tiene arroba');
            return;
          }

    this.submit();
    }
