class EventoProblema {
    constructor(Línea, Evento) {
      this.Línea = Línea;
      this.Evento = Evento; 
    }
}

class Nueva_Interfaz {
    agregarEvento(_NuevoEventoProblema) {
        const NewEvento = document.getElementById('listar-pitch');
        const elementoHtml = document.createElement('div');
        elementoHtml.innerHTML = `
            <div class="card text-left mb-4 pl-2">
                <div class="card-body">
                    <strong>${_NuevoEventoProblema.Línea}</strong>
                    <strong>- </strong> ${_NuevoEventoProblema.Evento}
                    <br>
                    <a href="#" class="btn btn-danger ml-4 mt-4" name="delete">Borrar</a>        
                </div>
            </div>
        `;
        NewEvento.appendChild(elementoHtml);
    }

    resetearFormulario(){
        document.getElementById('evento-form').reset();
    }

    EliminarEvento(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.MostrarMensaje('Eliminaste el proyecto. Puede cargar uno nuevo!', 'danger')
        }
    }

    MostrarMensaje(msj, cssClass) {
        const div = document.createElement('div');
        div.className = `mt-2 alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(msj))
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2500)
    }

}

document.getElementById('evento-form')
    .addEventListener('submit', function(e) {
        const LíneaDeTrabajo = document.getElementById('nombre').value
        const RegistrarEvento = document.getElementById('pitch').value
        
        e.preventDefault();
        
        const NuevoEventoProblema = new EventoProblema(LíneaDeTrabajo, RegistrarEvento)


        const ListadoDeEventos = new Nueva_Interfaz();
        
        if(LíneaDeTrabajo === '' || RegistrarEvento === '') {
            return ListadoDeEventos.MostrarMensaje('Termina de completar lo que falta', 'info')
        }
        ListadoDeEventos.agregarEvento(NuevoEventoProblema)
        ListadoDeEventos.resetearFormulario();
        ListadoDeEventos.MostrarMensaje('Felicitaciones! Haz logrado describir tu proyecto en un Twitter Pitch :)', 'success')
})

document.getElementById('listar-pitch')
    .addEventListener('click', function (e) {
        const ListadoDeEventos = new Nueva_Interfaz();
        ListadoDeEventos.EliminarEvento(e.target);

    })
