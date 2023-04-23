import Paciente from "paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
    
    { 
      pacientes && pacientes.length ? 
        (
            <>
              <h2 className='font-black text-3xl text-center mt-4'>Listado de Pacientes</h2>
              <p className='text-lg mt-2 text-center mb-5'>
                Administra tus {""}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
              </p>

              {
                pacientes.map(mascota => {
                  return (
                    <Paciente
                      key={mascota.id}
                      mascota={mascota}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                    />
                  )
                })
              }
            </>
        )
      : 
        (
          <>
             <h2 className='font-black text-3xl text-center mt-4'>No hay pacientes</h2>
              <p className='text-lg mt-2 text-center mb-5'>
                Comienza agregando {""}
                <span className='text-indigo-600 font-bold'>Pacientes y aparecerán aquí</span>
              </p>
          </>
        ) 
    }
    </div>
  )
}

export default ListadoPacientes
