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
                    Soy <strong>${_NuevoEventoProblema.Línea}</strong>
                    <strong>- </strong> ${_NuevoEventoProblema.Evento}        
                </div>
            </div>
        `;
        NewEvento.appendChild(elementoHtml);
    }

    resetearFormulario(){
        document.getElementById('evento-form').reset();
    }

    EliminarEvento() {

    }

    MostrarMensaje() {

    }

}

document.getElementById('evento-form')
    .addEventListener('submit', function(e) {
        const LíneaDeTrabajo = document.getElementById('nombre').value
        const RegistrarEvento = document.getElementById('pitch').value
        
        e.preventDefault();
        
        const NuevoEventoProblema = new EventoProblema(LíneaDeTrabajo, RegistrarEvento)

        const ListadoDeEventos = new Nueva_Interfaz();
        ListadoDeEventos.agregarEvento(NuevoEventoProblema)
        ListadoDeEventos.resetearFormulario();
})