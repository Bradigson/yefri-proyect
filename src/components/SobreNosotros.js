import '../assests/styles/SobreNosotros.scss';
const SobreNosotros = ()=>{
    return(
        <div className='SobreNosotro'>
           
                <div className='contenedore_nosotros'>
                        <div>
                            <div>
                                <h2>Quiénes Somos?</h2>
                            </div>
                            <div className='sobrenosotros-content'>
                                <h3>Somos <span>SafeTuri</span></h3>
                                <p>
                                    SafeTuri es una aplicación que permitirá a los turistas y residentes reportar de manera inmediata, a través de un botón de pánico, a las autoridades turísticas de cualquier accidente o suceso ocurrido en el momento. Por igual, la inclusión de llevar un seguimiento de la ubicación actual de las distintas unidades y patrullas dentro de la zona turística para asegurar la presencia de las autoridades a los turistas es de suma importancia para poder brindarle una experiencia de calidad y segura. De manera similar, buscamos presentar la ubicación de los distintos centros de importancia, incluyendo sus informaciones de contacto, para los turistas en caso de emergencias, como son los centros policiales y hospitales ubicados dentro de la Zona Colonial.
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className='bx bxs-quote-alt-right'></i>
                                    <p>
                                    “Ley y Orden, salvaguardando la seguridad ciudadana en todo el territorio nacional”
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                        

           


            <div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Tenemos como objetivos
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                1- Preservar la vida, la integridad física y moral de las personas.<br/>

                                2- Proteger y garantizar el libre ejercicio de los derechos y libertades de las personas en todo el territorio nacional.<br/>

                                3- Mantener la paz interior, el orden público y social y la seguridad pública.<br/>

                                4- Velar por el fiel y efectivo cumplimiento de las leyes y demás disposiciones generales, ejecutando las órdenes que reciba de las autoridades en el ámbito de sus respectivas competencias.<br/>

                                5- Prevenir y controlar la delincuencia y criminalidad.<br/>

                                6- Ejecutar las detenciones y capturas en los casos previstos por la ley.<br/>

                                7- Vigilar y proteger los edificios, instalaciones públicas y parques, así como aquellos centros o establecimientos que por su interés lo requieran.<br/>

                                8- Registrar y controlar los servicios a las entidades o servicios privados de seguridad.


                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}


export default SobreNosotros;